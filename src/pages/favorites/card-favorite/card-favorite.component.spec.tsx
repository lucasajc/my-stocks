import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestWrapper } from 'common/test-wrapper'
import { CardFavorite } from './card-favorite.component'

const history = createMemoryHistory()

describe('Card Favorite component', () => {
  const renderCardFavorite = () => {
    const onRemoveCallback = jest.fn()
    render(
      <Router history={history}>
        <CardFavorite
          symbol="some-company-symbol"
          name="some company name"
          onRemove={onRemoveCallback}
        />
      </Router>,
      {
        wrapper: TestWrapper,
      }
    )

    return { onRemoveCallback }
  }

  it('navigates to company page when user clicks on the card', () => {
    history.push = jest.fn()
    renderCardFavorite()

    userEvent.click(screen.getByText('some company name'))

    expect(history.push).toHaveBeenCalledWith('/company/some-company-symbol')
  })

  it('calls remove callback when user clicks on remove button', () => {
    const { onRemoveCallback } = renderCardFavorite()

    userEvent.click(screen.getByText('Remove'))

    expect(onRemoveCallback.mock.calls[0][0]).toBe('some-company-symbol')
  })
})
