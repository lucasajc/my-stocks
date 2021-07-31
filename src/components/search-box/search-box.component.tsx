import React, {
  ChangeEvent,
  FormEvent,
  PropsWithChildren,
  useState,
} from 'react'
import { Button, Container, Input } from './search-box.styled'

interface IProps {
  placeholder?: string
  onSearch: (searchText: string) => void
  onChangeSearchText: (searchText: string) => void
}

export const SearchBox = ({
  placeholder,
  onSearch,
  onChangeSearchText,
  children,
}: PropsWithChildren<IProps>) => {
  const [searchText, setSearchText] = useState<string>('')
  const onSubmit = (e: FormEvent) => {
    if (!searchText) return
    onSearch(searchText)
    e.preventDefault()
  }
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
    onChangeSearchText(event.target.value)
  }

  return (
    <Container onSubmit={onSubmit}>
      <Input placeholder={placeholder} onChange={onChange} />
      <Button variant="primary" onClick={onSubmit}>
        Search
      </Button>
      {children}
    </Container>
  )
}
