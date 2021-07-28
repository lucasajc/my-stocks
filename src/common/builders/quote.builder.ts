import { Quote } from 'client-api/quote'

class QuoteBuilder implements Quote {
  avgTotalVolume: number
  calculationPrice: 'tops' | 'sip' | 'previousclose' | 'close' | 'iexlasttrade'
  change: number
  changePercent: number
  close: number
  closeSource: string
  closeTime: number
  companyName: string
  delayedPrice: number
  delayedPriceTime: number
  extendedChange: number
  extendedChangePercent: number
  extendedPrice: number
  extendedPriceTime: number
  high: number
  highSource: string
  highTime: number
  iexAskPrice: number
  iexAskSize: number
  iexBidPrice: number
  iexBidSize: number
  iexClose: number
  iexCloseTime: number
  iexLastUpdated: number
  iexMarketPercent: number
  iexOpen: number
  iexOpenTime: number
  iexRealtimePrice: number
  iexRealtimeSize: number
  iexVolume: number
  isUSMarketOpen: boolean
  lastTradeTime: number
  latestPrice: number
  latestSource: string
  latestTime: string
  latestUpdate: number
  latestVolume: number
  low: number
  lowSource: string
  lowTime: number
  marketCap: number
  oddLotDelayedPrice: number
  oddLotDelayedPriceTime: number
  open: number
  openSource: string
  openTime: number
  peRatio: number
  previousClose: number
  previousVolume: number
  primaryExchange: string
  symbol: string
  volume: number
  week52High: number
  week52Low: number
  ytdChange: number

  constructor() {
    this.symbol = 'some symbol'
    this.companyName = 'some company name'
    this.primaryExchange = 'some primary exchange'
    this.calculationPrice = 'iexlasttrade'
    this.open = null
    this.openTime = null
    this.openSource = 'official'
    this.close = null
    this.closeTime = null
    this.closeSource = 'official'
    this.high = null
    this.highTime = 1627329326281
    this.highSource = '15 minute delayed price'
    this.low = null
    this.lowTime = 1627306213268
    this.lowSource = '15 minute delayed price'
    this.latestPrice = 142.77
    this.latestSource = 'IEX Last Trade'
    this.latestTime = 'July 26 2021'
    this.latestUpdate = 1627329595647
    this.latestVolume = null
    this.iexRealtimePrice = 142.77
    this.iexRealtimeSize = 44
    this.iexLastUpdated = 1627329595647
    this.delayedPrice = null
    this.delayedPriceTime = null
    this.oddLotDelayedPrice = null
    this.oddLotDelayedPriceTime = null
    this.extendedPrice = null
    this.extendedChange = null
    this.extendedChangePercent = null
    this.extendedPriceTime = null
    this.previousClose = 141.34
    this.previousVolume = 4474157
    this.change = 1.43
    this.changePercent = 0.01012
    this.volume = null
    this.iexMarketPercent = 0.018703847808944834
    this.iexVolume = 79366
    this.avgTotalVolume = 5477257
    this.iexBidPrice = 0
    this.iexBidSize = 0
    this.iexAskPrice = 0
    this.iexAskSize = 0
    this.iexOpen = 142.75
    this.iexOpenTime = 1627329588932
    this.iexClose = 142.77
    this.iexCloseTime = 1627329595647
    this.marketCap = 127568254154
    this.peRatio = 23.87
    this.week52High = 152.84
    this.week52Low = 101.89
    this.ytdChange = 0.16065216386169853
    this.lastTradeTime = 1627329595647
    this.isUSMarketOpen = false
  }

  withSymbol(symbol: string) {
    this.symbol = symbol
    return this
  }

  withCompanyName(companyName: string) {
    this.companyName = companyName
    return this
  }

  withLatestPrice(latestPrice: number) {
    this.latestPrice = latestPrice
    return this
  }

  withLatestVolume(latestVolume: number) {
    this.latestVolume = latestVolume
    return this
  }

  withPreviousVolume(previousVolume: number) {
    this.previousVolume = previousVolume
    return this
  }

  withPeRatio(peRatio: number) {
    this.peRatio = peRatio
    return this
  }

  build() {
    return this
  }
}

export default QuoteBuilder
