import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestWrapper } from '../../common/test-wrapper'
import { Button } from './button.component'

describe('Button component', () => {
  it('calls onClick callback when user clicks on the button', () => {
    const onClickCallback = jest.fn()
    render(<Button onClick={onClickCallback}>Click here!</Button>, {
      wrapper: TestWrapper,
    })

    userEvent.click(screen.getByRole('button', { name: 'Click here!' }))

    expect(onClickCallback).toHaveBeenCalledTimes(1)
  })
})
