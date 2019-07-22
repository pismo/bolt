export const mapUser = data => {
  if (!data) return {}

  const email = data.email
  const token = data.token
  const refreshToken = data.refresh
  const accounts = data.accounts
  const roles = data.roles || []
  const tenant = data.tenant
  const isCustomer = accounts && accounts.length > 0

  return {
    token,
    refreshToken,
    email,
    roles,
    accounts,
    isCustomer,
    tenant
  }
}
