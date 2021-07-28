import React, { FormEvent, useState } from 'react'
import { Button, Container, Input } from './search-box.styled'

interface IProps {
  placeholder?: string
  onSearch: (searchText: string) => void
}

export const SearchBox = ({ placeholder, onSearch }: IProps) => {
  const [searchText, setSearchText] = useState<string>('')
  const onSubmit = (e: FormEvent) => {
    if (!searchText) return
    onSearch(searchText)
    e.preventDefault()
  }

  return (
    <Container onSubmit={onSubmit}>
      <Input
        placeholder={placeholder}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <Button variant="primary" onClick={onSubmit} disabled={!searchText}>
        Search
      </Button>
    </Container>
  )
}
