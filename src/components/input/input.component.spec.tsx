import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestWrapper } from 'common/test-wrapper'
import { Input } from './input.component'

describe('Input component', () => {
  it('calls onChange callback when user types', () => {
    const onChangeCallback = jest.fn()
    render(
      <Input
        onChange={onChangeCallback}
        placeholder="some input placeholder"
      />,
      { wrapper: TestWrapper }
    )

    userEvent.type(
      screen.getByPlaceholderText('some input placeholder'),
      'text input'
    )

    expect(onChangeCallback.mock.calls[0][0].target.value).toEqual('text input')
  })
})
