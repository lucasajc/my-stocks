import styled from 'styled-components'
import { Link as LinkUI } from 'react-router-dom'

export const Link = styled(LinkUI)`
  transition: color 0.1s ease-in;
  text-decoration: none;
  color: ${(props) => props.theme.link.default.color};
  &:hover {
    color: ${(props) => props.theme.link.hover.color};
  }
`
