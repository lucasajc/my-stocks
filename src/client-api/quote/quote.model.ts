class Quote {
  symbol: string
  companyName: string
  primaryExchange: string
  calculationPrice: 'tops' | 'sip' | 'previousclose' | 'close' | 'iexlasttrade'
  open: number
  openTime?: number
  openSource: string
  close: number
  closeTime?: number
  closeSource: string
  high: number
  highTime: number
  highSource: string
  low: number
  lowTime: number
  lowSource: string
  latestPrice: number
  latestSource: string
  latestTime: number
  latestUpdate: number
  latestVolume?: number
  iexRealtimePrice: number
  iexRealtimeSize: number
  iexLastUpdated: number
  delayedPrice?: number
  delayedPriceTime?: number
  oddLotDelayedPrice?: number
  oddLotDelayedPriceTime?: number
  extendedPrice?: number
  extendedChange?: number
  extendedChangePercent?: number
  extendedPriceTime?: number
  previousClose: number
  previousVolume: number
  change: number
  changePercent: number
  volume?: number
  iexMarketPercent: number
  iexVolume: number
  avgTotalVolume: number
  iexBidPrice: number
  iexBidSize: number
  iexAskPrice: number
  iexAskSize: number
  iexOpen: number
  iexOpenTime: number
  iexClose: number
  iexCloseTime: number
  marketCap: number
  peRatio: number
  week52High: number
  week52Low: number
  ytdChange: number
  lastTradeTime: number
  isUSMarketOpen: boolean

  constructor(data: Partial<Quote>) {
    Object.assign(this, data)
  }
}

export default Quote
