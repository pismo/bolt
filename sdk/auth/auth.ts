import { createClient, AxiosPromise } from '@pismo/sdk-core'
import { CrossStorage } from '@pismo/sdk-cross-storage'
import eres from 'eres'
import * as TokenRefresher from 'token-refresher'
import { isValidDocument } from './fns/isValidDocument'
import { mapUser } from './fns/mapUser'

export interface AuthInterfaceProps {
  baseURL: string
  isAccount?: boolean
  keepAlive?: boolean
  refreshRequiresUserInteraction?: boolean
  useOldLogin?: boolean
  onUpdate(user: AuthUser): void
}

export interface Credentials {
  document_number?: string
  email?: string
  password: string
}

export interface LoginInput {
  emailOrCPF: string
  password: string
  rememberMe: boolean
}

export interface AuthUser {
  token?: string
  tenant?: string
  refreshToken?: string
}

export interface AuthInterface {
  login(input: LoginInput): Promise<void>
  logout(token?: string): AxiosPromise
  ensure(): AxiosPromise
  recoverPassword(email: string): AxiosPromise
  onUpdateProxy(currentRefresher: any): Promise<any>
  resetSession(): Promise<void>
  setSession(data: any): Promise<void>
  getPreferences(): Promise<any>
}

export const Auth = ({
  baseURL,
  isAccount = false,
  keepAlive = false,
  refreshRequiresUserInteraction = true,
  useOldLogin = false,
  onUpdate
}: AuthInterfaceProps): AuthInterface => {
  const client = createClient({ baseURL: `${baseURL}/auth/v1`, headers: {} })
  const crossStorage = CrossStorage({ baseURL })
  const baseEndpoint = `${isAccount ? '/customer' : ''}/users`

  const resetSession = async () => {
    const storedAuthData: any = await crossStorage.read('pismo-auth')

    if (storedAuthData) {
      const { token } = storedAuthData

      const logoutRequest = () =>
        useOldLogin ? client.delete(`/users/token/${token}`) : Promise.resolve()
      await logoutRequest()
    }

    return crossStorage.del('pismo-auth')
  }

  const onUpdateProxy = async currentRefresher => {
    const user: any = await crossStorage.read('pismo-auth')
    onUpdate(user)

    if (currentRefresher) currentRefresher.stop()

    if (keepAlive && user && user.token) {
      const { token, tenant, refreshToken } = user

      const refresherCredentials = {
        token,
        tenant,
        refresh: refreshToken
      }

      const endpoint = useOldLogin
        ? 'tokens'
        : `${isAccount ? 'customer/users/refresh' : 'users/refresh'}`

      const refresherSettings = {
        url: `${baseURL}/auth/v1/${endpoint}`,
        requireUserInteraction: refreshRequiresUserInteraction
      }

      return new TokenRefresher({
        refresherCredentials,
        refresherSettings,
        handleRefresher: handleRefresher(currentRefresher)
      })
    }
  }

  const handleRefresher = currentRefresher => data => {
    if (!data) return resetSession()

    const user = mapUser(data)

    return crossStorage
      .write('pismo-auth', user)
      .then(() => onUpdateProxy(currentRefresher))
  }

  return {
    onUpdateProxy,
    resetSession,
    getPreferences: async () => {
      const [error, response] = await eres(crossStorage.read('pismo-pref'))

      if (error || !response) return { identification: '', rememberMe: false }

      return response.preferences
        ? response.preferences
        : { identification: '', rememberMe: false }
    },
    setSession: async data => {
      if (!data) {
        await resetSession()
        return Promise.reject()
      }

      const user = mapUser(data)

      return crossStorage.write('pismo-auth', user)
    },
    login: async input => {
      const { emailOrCPF, password, rememberMe } = input

      const credentials: Credentials = isValidDocument(emailOrCPF)
        ? { document_number: emailOrCPF, password }
        : { email: emailOrCPF, password }

      const preferences = rememberMe
        ? { identification: emailOrCPF, rememberMe }
        : {}

      const request = () =>
        useOldLogin
          ? client.post('/users/token', credentials)
          : client.post(`${baseEndpoint}/login`, credentials)

      const user = await request().then(res => res.data)

      const mappedUser = mapUser(user)

      return crossStorage.writeMany([
        { key: 'pismo-auth', value: mappedUser },
        {
          key: 'pismo-pref',
          value: { identification: emailOrCPF, preferences }
        }
      ])
    },
    logout: token => {
      if (token)
        return client.delete(`/users/token/${token}`).then(res => res.data)

      return Promise.resolve()
    },
    ensure: async () => {
      const [error, response] = await eres(crossStorage.read('pismo-auth'))

      if (error || !response) return Promise.reject()

      const { refreshToken = '', token = '' } = response

      if (!token && !refreshToken) return Promise.reject()
      if (useOldLogin) {
        // @ts-ignore
        return client
          .get(`${baseEndpoint}/tokens`, { refresh: refreshToken || token })
          .then(res => res.data)
      }

      return client
        .post(`${baseEndpoint}/refresh`, { refresh: refreshToken || token })
        .then(res => res.data)
    },
    recoverPassword: email => {
      if (!email || !email.length)
        return Promise.reject('Email not being passed')

      return client.post(`/users/${email}/password/reset`).then(res => res.data)
    }
  }
}
