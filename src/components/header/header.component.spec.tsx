import React from 'react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppThemeContext } from 'app/themes'
import { TestWrapper } from 'common/test-wrapper'
import { Header } from './header.component'

const history = createMemoryHistory()

describe('Header component', () => {
  afterEach(() => localStorage.clear())

  it('navigates to page urls when user clicks on the respective links', () => {
    history.push = jest.fn()
    render(
      <Router history={history}>
        <Header />
      </Router>,
      { wrapper: TestWrapper }
    )

    userEvent.click(screen.getByAltText('My Stocks'))
    userEvent.click(screen.getByText('Home'))
    userEvent.click(screen.getByText('Favorites'))

    expect(history.push).toHaveBeenNthCalledWith(1, '/')
    expect(history.push).toHaveBeenNthCalledWith(2, '/')
    expect(history.push).toHaveBeenNthCalledWith(3, '/favorites')
  })

  it('updates theme to dark mode when theme is not the dark mode and user clicks on the theme checkbox', () => {
    const setThemeCallback = jest.fn()
    render(
      <AppThemeContext.Provider
        value={{ theme: 'main', setTheme: setThemeCallback }}
      >
        <Router history={history}>
          <Header />
        </Router>
      </AppThemeContext.Provider>,
      { wrapper: TestWrapper }
    )

    userEvent.click(screen.getByLabelText('Dark mode'))

    expect(setThemeCallback).toHaveBeenCalledWith('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('updates theme to main mode when theme is the dark mode and user clicks on the theme checkbox', () => {
    const setThemeCallback = jest.fn()
    render(
      <AppThemeContext.Provider
        value={{ theme: 'dark', setTheme: setThemeCallback }}
      >
        <Router history={history}>
          <Header />
        </Router>
      </AppThemeContext.Provider>,
      { wrapper: TestWrapper }
    )

    userEvent.click(screen.getByLabelText('Dark mode'))

    expect(setThemeCallback).toHaveBeenCalledWith('main')
    expect(localStorage.getItem('theme')).toBe('main')
  })
})
