class Company {
  symbol: string
  companyName: string
  exchange: string
  industry: string
  website: string
  description?: string
  CEO: string
  securityName: string
  issueType: string
  sector: string
  primarySicCode: number
  employees: number
  tags: string[]
  address: string
  address2?: string
  state: string
  city: string
  zip: string
  country: string
  phone: string

  constructor(data: Partial<Company>) {
    Object.assign(this, data)
  }
}

export default Company
