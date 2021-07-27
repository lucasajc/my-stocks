import styled from 'styled-components'

export const AppContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: ${(props) => props.theme.text.font};
  background: ${(props) => props.theme.body.backgroundColor};
`
