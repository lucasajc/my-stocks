import { ApiCallResponse } from 'client-api/api.service.interfaces'
import ApiService from '../api.service'
import Quote from './quote.model'

class QuoteService extends ApiService {
  public async getQuote(symbol: string): Promise<ApiCallResponse<Quote>> {
    const { status, error, data } = await this.get(`/v1/stock/${symbol}/quote`)
    return {
      status,
      error,
      data: data ? new Quote(data) : null,
    }
  }
}

export default new QuoteService()
