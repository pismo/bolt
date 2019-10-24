import * as React from 'react'

const { Fragment } = React

export class StaticCan {
  static ROLES: string[] = []
}
export interface CanProps {
  userRoles: string[]
  children: React.ReactNode
  roles?: string[]
  fallback?: () => React.ReactNode | React.FC | null
}

export const toCan = (
  userRoles: string[],
  roles: string[] = StaticCan.ROLES
): boolean => userRoles.some(val => roles.indexOf(val) !== -1)

export const Can: React.FC<CanProps> = ({
  roles = StaticCan.ROLES,
  userRoles,
  children,
  fallback
}: CanProps) => (
  <Fragment>
    {toCan(userRoles, roles) ? children : fallback && fallback()}
  </Fragment>
)
