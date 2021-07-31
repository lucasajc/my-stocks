import { Link as LinkUI } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 20px;
`

export const Link = styled(LinkUI)`
  color: inherit;
  transition: color 0.1s ease-in;
  color: ${(props) => props.theme.link.default.color};
  &:hover {
    color: ${(props) => props.theme.link.hover.color};
  }
`
export const BreadcrumbBreaker = styled.span`
  display: inline-block;
  padding: 0 4px;
`
