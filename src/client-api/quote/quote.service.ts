import { ApiCallResponse } from 'client-api/api.service.interfaces'
import ApiService from '../api.service'
import Quote from './quote.model'

class QuoteService extends ApiService {
  public getQuote(symbol: string): Promise<ApiCallResponse<Quote>> {
    return this.get(`/v1/stock/${symbol}/quote`, { displayPercent: 'true' })
  }
}

export default new QuoteService()
