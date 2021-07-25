import { ApiCallResponse } from 'client-api/api.service.interfaces'
import ApiService from '../api.service'
import Company from './company.model'

class CompanyService extends ApiService {
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
