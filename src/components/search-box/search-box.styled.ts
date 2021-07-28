import styled from 'styled-components'
import { Input as UIInput } from 'components/input/input.component'
import { Button as UIButton } from 'components/button/button.component'

export const Container = styled.form`
  display: flex;
  margin-bottom: 16px;
`

export const Input = styled(UIInput)`
  width: 280px;
  margin-right: 8px;
`

export const Button = styled(UIButton)`
  width: 280px;
  margin-right: 12px;
`
