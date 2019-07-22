import { CrossStorageClient } from 'cross-storage'

export interface CrossStorageProps {
  baseURL: string
}

interface CrossStorageItem {
  value: any
  key: string
}

export interface CrossStorage {
  read(key: string): Promise<any>
  write(key: string, value: any): Promise<void>
  writeMany(pairs?: CrossStorageItem[]): Promise<void>
  del(key: string): Promise<void>
  clear(): Promise<void>
  close(): Promise<void>
}

export const CrossStorage = ({ baseURL }: CrossStorageProps): CrossStorage => {
  const isProduction = !/pismolabs/i.test(baseURL)
  const urlEnvComponent = isProduction ? 'pismo' : 'pismolabs'

  const isItau = /itau|cloud/i.test(baseURL)
  const itauEnvComponent = isItau ? '-itau' : ''
  const topLevel = isItau ? 'cloud' : 'io'

  const hubURL = `//cross-storage-hub${itauEnvComponent}.${urlEnvComponent}.${topLevel}/hub.html`

  const storage = new CrossStorageClient(hubURL, {
    frameId: 'PismoStorageFrame'
  })

  return {
    read: key =>
      storage
        .onConnect()
        .then(() => storage.get(key).then(res => JSON.parse(res) || {})),
    write: (key, value) =>
      storage.onConnect().then(() => storage.set(key, JSON.stringify(value))),
    writeMany: (pairs = []) =>
      storage
        .onConnect()
        .then(() =>
          pairs.map(({ key, value }) =>
            storage.set(
              key,
              typeof value !== 'string' ? JSON.stringify(value) : value
            )
          )
        ),
    del: key => storage.onConnect().then(() => storage.del(key)),
    clear: () => storage.onConnect().then(() => storage.clear()),
    close: () => storage.onConnect().then(() => storage.close())
  }
}
