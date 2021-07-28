import styled from 'styled-components'

export const AppContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  font-family: ${(props) => props.theme.text.font};
  background: ${(props) => props.theme.body.backgroundColor};
`
