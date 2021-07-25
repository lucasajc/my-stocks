import { ApiCallResponse } from 'client-api/service.interfaces'
import Service from '../service'
import Company from './company.model'

class CompanyService extends Service {
  public async getCompany(symbol: string): Promise<ApiCallResponse<Company>> {
    const { status, error, data } = await this.get(
      `/v1/stock/${symbol}/company`
    )
    return {
      status,
      error,
      data: data ? new Company(data) : null,
    }
  }
}

export default new CompanyService()
