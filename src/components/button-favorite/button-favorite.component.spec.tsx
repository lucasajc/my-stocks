import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestWrapper } from 'common/test-wrapper'
import { ButtonFavorite } from './button-favorite.component'

describe('Button Favorite component', () => {
  it('calls onClick callback when user clicks on the button', () => {
    const onClickCallback = jest.fn()
    render(<ButtonFavorite onClick={onClickCallback} />, {
      wrapper: TestWrapper,
    })

    userEvent.click(screen.getByText('Save'))

    expect(onClickCallback).toHaveBeenCalledTimes(1)
  })

  it('shows a label that means it is saved', () => {
    const onClickCallback = jest.fn()
    render(<ButtonFavorite active onClick={onClickCallback} />, {
      wrapper: TestWrapper,
    })

    userEvent.click(screen.getByText('Saved'))

    expect(onClickCallback).toHaveBeenCalledTimes(1)
  })
})
