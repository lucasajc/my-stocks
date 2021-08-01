import React, { PropsWithChildren } from 'react'
import { Breadcrumb } from 'components/breadcrumb/breadcrumb.component'
import { Container } from './layout.styled'

interface IProps {
  path: { name: string; url?: string }[]
}

export const Layout = ({ path, children }: PropsWithChildren<IProps>) => {
  return (
    <Container>
      <Breadcrumb path={path} />
      {children}
    </Container>
  )
}
