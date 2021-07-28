import { Company } from 'client-api/company'

class CompanyBuilder implements Company {
  CEO: string
  address: string
  address2: string
  city: string
  companyName: string
  country: string
  description: string
  employees: number
  exchange: string
  industry: string
  issueType: string
  phone: string
  primarySicCode: number
  sector: string
  securityName: string
  state: string
  symbol: string
  tags: string[]
  website: string
  zip: string

  constructor() {
    this.symbol = 'some symbol'
    this.companyName = 'some company name'
    this.exchange = 'some exchange'
    this.industry = 'some industry'
    this.website = 'http://some.website'
    this.description = 'some description'
    this.CEO = 'some CEO'
    this.securityName = 'some security name'
    this.issueType = 'some issue type'
    this.sector = 'some sector'
    this.primarySicCode = 7460
    this.employees = 350674
    this.tags = ['some-tag', 'another-tag']
    this.address = 'some address'
    this.address2 = 'some address 2'
    this.state = 'some state'
    this.city = 'some city'
    this.zip = '420-102751'
    this.country = 'US'
    this.phone = '19869085495'
  }

  withSymbol(symbol: string) {
    this.symbol = symbol
    return this
  }

  withCompanyName(companyName: string) {
    this.companyName = companyName
    return this
  }

  withIndustry(industry: string) {
    this.industry = industry
    return this
  }

  build() {
    return this
  }
}

export default CompanyBuilder
