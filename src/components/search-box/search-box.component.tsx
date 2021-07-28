import React, { useState } from 'react'
import { Button, Container, Input } from './search-box.styled'

interface IProps {
  placeholder?: string
  onSearch: (searchText: string) => void
}

export const SearchBox = ({ placeholder, onSearch }: IProps) => {
  const [searchText, setSearchText] = useState<string>('')

  return (
    <Container onSubmit={() => onSearch(searchText)}>
      <Input
        placeholder={placeholder}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <Button variant="primary" onClick={() => onSearch(searchText)}>
        Search
      </Button>
    </Container>
  )
}
