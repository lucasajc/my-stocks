import React from 'react'
import { Button } from 'components/button/button.component'
import { Content } from './button-favorite.styled'

interface IProps {
  active?: boolean
  onClick: () => void
}

export const ButtonFavorite = ({ active, onClick }: IProps) => {
  const buttonName = active ? 'Saved' : 'Save'
  return (
    <Button variant="secondary" onClick={onClick}>
      <Content>
        <svg
          fill={active ? '#f4ea27' : 'transparent'}
          height="16"
          stroke={active ? '#444' : 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="16"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <span>{buttonName}</span>
      </Content>
    </Button>
  )
}
