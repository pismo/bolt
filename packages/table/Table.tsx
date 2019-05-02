import { media, P, styled } from '@pismo/bolt-core'
import * as React from 'react'

import { MdArrowBack } from 'react-icons/md'


export interface TableProps {
  onClickBack?: () => void
  title?: string
  children: React.ReactNode
  width?: string
}

const TableWrapper = styled.div.attrs({})<TableProps>`
  width: ${({ width }) => (width ? width : '60%')};
  margin: 1rem auto;

  ${media.mobile`
    width: auto;
    margin: 1rem;

  `}
`

const TableArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const TableHeader = styled.div`
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #f2f3f5;
  padding: 0.8125rem 1.25rem;
`

const TableTitle = styled(P)`
  margin: 0;
`

const BackLink = styled.span`
  display: flex;
  align-items: center;
`

const BackIcon = styled(MdArrowBack)`
  cursor: pointer;
  color: #2c3644;
  font-size: 1.2rem;
  margin-right: 0.35rem;
`

export const Table = ({ onClickBack, title, children, width }: TableProps) => {
  return (
    <TableWrapper width={width}>
      {title && (
        <TableHeader>
          {onClickBack && (
            <BackLink onClick={onClickBack}>
              <BackIcon />
            </BackLink>
          )}
          <TableTitle fontStyle="bold">{title}</TableTitle>
        </TableHeader>
      )}
      <TableArea>{children}</TableArea>
    </TableWrapper>
  )
}
