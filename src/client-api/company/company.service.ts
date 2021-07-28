import { ApiCallResponse } from 'client-api/api.service.interfaces'
import ApiService from '../api.service'
import Company from './company.model'

class CompanyService extends ApiService {
  public getCompany(symbol: string): Promise<ApiCallResponse<Company>> {
    return this.get(`/v1/stock/${symbol}/company`)
  }
}

export default new CompanyService()
