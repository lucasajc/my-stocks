import React from 'react'
import { SearchBox } from 'components/search-box/search-box.component'
import { useHistory } from 'react-router-dom'
import { BackgroundImage, Card, Container } from 'pages/home/home.styled'

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
        <SearchBox onSearch={onSearch} placeholder="Search for a company..." />
      </Card>
    </Container>
  )
}

export default HomePage
