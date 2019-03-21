import { media, styled } from '@pismo/bolt-core'
import * as React from 'react'

export interface TableItemProps {
  isSuspended?: boolean
  children?: React.ReactNode
}

export const StyledTableItem = styled.div.attrs({
  role: 'button',
})<TableItemProps>`
  text-decoration: none;
  cursor: ${({ isSuspended }) => (isSuspended ? 'not-allowed' : 'pointer')};
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fafafa;
  padding: 0.8125rem 1.25rem;

  ${media.mobile`
    flex-direction: column;
    align-items: flex-start;
  `}
`

export const TableItem = (props: TableItemProps & React.HTMLAttributes<HTMLDivElement>) => (
  <StyledTableItem isSuspended={props.isSuspended}> {props.children} </StyledTableItem>
)
