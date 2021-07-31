import { ApiCallResponse } from 'client-api/api.service.interfaces'
import ApiService from '../api.service'
import StockSymbol from './symbol.model'

class SymbolService extends ApiService {
  public getSymbols(): Promise<ApiCallResponse<StockSymbol[]>> {
    return this.get('/v1/ref-data/symbols', { filter: 'symbol,name' })
  }
}

export default new SymbolService()
