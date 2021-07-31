import React from 'react'
import { Text } from 'components/text/text.component'
import { Link } from 'components/link/link.component'
import { Container, BreadcrumbBreaker } from './breadcrumb.styled'

interface IProps {
  path: { name: string; url?: string }[]
}

export const Breadcrumb = ({ path }: IProps) => {
  return (
    <Container>
      {path.map((pathItem, index) => (
        <Text key={pathItem.name} weight="normal" size="md">
          {pathItem.url ? (
            <span>
              <Link to={pathItem.url}>{pathItem.name}</Link>
            </span>
          ) : (
            <span>{pathItem.name}</span>
          )}
          {index < path.length - 1 && <BreadcrumbBreaker>/</BreadcrumbBreaker>}
        </Text>
      ))}
    </Container>
  )
}
