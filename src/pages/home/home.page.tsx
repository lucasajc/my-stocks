import React from 'react'
import { useHistory } from 'react-router-dom'
import { BackgroundImage, Card, Container } from 'pages/home/home.styled'
import { SearchBoxSymbol } from 'components/search-box-symbol/search-box-symbol.component'

const HomePage = () => {
  const history = useHistory()
  const onSearch = (symbolToSearch: string) => {
    history.push(`/company/${symbolToSearch}`)
  }

  return (
    <Container>
      <BackgroundImage
        src="assets/illustration-liberty.png"
        alt="Illustration of a plane flying over the statue of liberty with a NASDAQ quote"
      />
      <Card>
        <SearchBoxSymbol
          onSearch={onSearch}
          placeholder="Search for a company..."
        />
      </Card>
    </Container>
  )
}

export default HomePage
