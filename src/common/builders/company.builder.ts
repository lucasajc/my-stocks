import { Company } from 'client-api/company'

class CompanyBuilder extends Company {
  constructor() {
    super({
      symbol: 'some symbol',
      companyName: 'some company name',
      exchange: 'some exchange',
      industry: 'some industry',
      website: 'http://some.website',
      description: 'some description',
      CEO: 'some CEO',
      securityName: 'some security name',
      issueType: 'some issue type',
      sector: 'some sector',
      primarySicCode: 7460,
      employees: 350674,
      tags: ['some-tag', 'another-tag'],
      address: 'some address',
      address2: 'some address 2',
      state: 'some state',
      city: 'some city',
      zip: '420-102751',
      country: 'US',
      phone: '19869085495',
    })
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
