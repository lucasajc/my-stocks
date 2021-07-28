import React from 'react'
import { CardContainer } from 'pages/company/company.page.styled'
import { CardLatestPrice } from 'pages/company/summary/card-latest-price/card-latest-price.component'
import { CardVolume } from 'pages/company/summary/card-volume/card-volume.component'
import { CardQuoteSummary } from 'pages/company/summary/card-quote-summary/card-quote-summary.component'
import { CardCompanyDetails } from 'pages/company/summary/card-company-details/card-company-details.component'
import Company from 'client-api/company/company.model'
import { Quote } from 'client-api/quote'

interface IProps {
  company: Company
  quote: Quote
}

export const CompanySummary = ({ company, quote }: IProps) => {
  return (
    <>
      <CardContainer>
        <CardLatestPrice
          change={quote.change}
          changePercent={quote.changePercent}
          high={quote.high}
          low={quote.low}
          latestPrice={quote.latestPrice}
          iexOpen={quote.iexOpen}
          iexClose={quote.iexClose}
        />
        <CardVolume
          previousVolume={quote.previousVolume}
          latestVolume={quote.latestVolume}
          avgTotalVolume={quote.avgTotalVolume}
        />
        <CardQuoteSummary
          iexAskPrice={quote.iexAskPrice}
          iexAskSize={quote.iexAskSize}
          iexBidPrice={quote.iexBidPrice}
          iexBidSize={quote.iexBidSize}
          marketCap={quote.marketCap}
          peRatio={quote.peRatio}
          week52High={quote.week52High}
          week52Low={quote.week52Low}
        />
      </CardContainer>
      <CardCompanyDetails
        industry={company.industry}
        website={company.website}
        CEO={company.CEO}
        sector={company.sector}
        employees={company.employees}
        tags={company.tags}
        city={company.city}
        country={company.country}
      />
    </>
  )
}
