import styled from 'styled-components'

export const Card = styled.div`
  color: ${(props) => props.theme.text.colors.labels.default};
  background: ${(props) => props.theme.card.default.backgroundColor};
  padding: 24px;
  margin: 8px;
  border-radius: 16px;
  box-shadow: 1px 1px 2px rgb(0, 0, 0, 0.2);
  flex: 1;
  @media only screen and (min-width: 360px) {
    min-width: 266px;
  }
`

export const CardHeader = styled.div`
  padding: 0 0 8px;
`

export const CardFooter = styled.div`
  padding-top: 16px;
`

export const CardPrimaryContent = styled.span`
  font-size: 36px;
`
