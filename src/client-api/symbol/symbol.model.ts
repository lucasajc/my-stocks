class StockSymbol {
  symbol: string
  name: string

  constructor(data: Partial<StockSymbol>) {
    Object.assign(this, data)
  }
}

export default StockSymbol
