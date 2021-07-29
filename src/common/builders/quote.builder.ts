import { Quote } from 'client-api/quote'

class QuoteBuilder extends Quote {
  constructor() {
    super({
      symbol: 'some symbol',
      companyName: 'some company name',
      primaryExchange: 'some primary exchange',
      calculationPrice: 'iexlasttrade',
      open: null,
      openTime: null,
      openSource: 'official',
      close: null,
      closeTime: null,
      closeSource: 'official',
      high: null,
      highTime: 1627329326281,
      highSource: '15 minute delayed price',
      low: null,
      lowTime: 1627306213268,
      lowSource: '15 minute delayed price',
      latestPrice: 142.77,
      latestSource: 'IEX Last Trade',
      latestTime: 'July 26 2021',
      latestUpdate: 1627329595647,
      latestVolume: null,
      iexRealtimePrice: 142.77,
      iexRealtimeSize: 44,
      iexLastUpdated: 1627329595647,
      delayedPrice: null,
      delayedPriceTime: null,
      oddLotDelayedPrice: null,
      oddLotDelayedPriceTime: null,
      extendedPrice: null,
      extendedChange: null,
      extendedChangePercent: null,
      extendedPriceTime: null,
      previousClose: 141.34,
      previousVolume: 4474157,
      change: 1.43,
      changePercent: 0.01012,
      volume: null,
      iexMarketPercent: 0.018703847808944834,
      iexVolume: 79366,
      avgTotalVolume: 5477257,
      iexBidPrice: 0,
      iexBidSize: 0,
      iexAskPrice: 0,
      iexAskSize: 0,
      iexOpen: 142.75,
      iexOpenTime: 1627329588932,
      iexClose: 142.77,
      iexCloseTime: 1627329595647,
      marketCap: 127568254154,
      peRatio: 23.87,
      week52High: 152.84,
      week52Low: 101.89,
      ytdChange: 0.16065216386169853,
      lastTradeTime: 1627329595647,
      isUSMarketOpen: false,
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
