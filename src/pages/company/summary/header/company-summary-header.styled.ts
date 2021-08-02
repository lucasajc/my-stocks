import styled from 'styled-components'

export const Header = styled.div`
  color: ${(props) => props.theme.text.colors.labels.default};
  padding: 32px 8px 12px;
`

export const Title = styled.h2`
  margin: 0 0 4px;
`

export const PageActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 8px 0;
`
