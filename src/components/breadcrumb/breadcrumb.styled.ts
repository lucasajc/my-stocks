import styled from 'styled-components'

export const Container = styled.nav`
  color: ${(props) => props.theme.text.colors.labels.default};
  margin-bottom: 20px;
`

export const BreadcrumbBreaker = styled.span`
  display: inline-block;
  padding: 0 4px;
`
