import styled from 'styled-components'
import { Input as UIInput } from 'components/input/input.component'
import { Button as UIButton } from 'components/button/button.component'

export const Container = styled.form`
  display: flex;
  flex-wrap: wrap;
  @media only screen and (min-width: 360px) {
    flex-wrap: nowrap;
  }
`

export const Input = styled(UIInput)`
  width: 100%;
  @media only screen and (min-width: 360px) {
    max-width: 280px;
    min-width: 148px;
    width: 100%;
  }
`

export const Button = styled(UIButton)`
  width: 100%;
  margin: 12px 0 0 0;
  @media only screen and (min-width: 360px) {
    width: 180px;
    margin: 0 0 0 8px;
  }
`
