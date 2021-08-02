import React from 'react'
import { Text } from 'components/text/text.component'
import { RequestStatus } from 'common/hooks/use-request/use-request.hook'
import { Container } from './error-message.styled'

interface IProps {
  symbol: string
  companyStatus: RequestStatus
  quoteStatus: RequestStatus
}

export const ErrorMessage = ({
  symbol,
  companyStatus,
  quoteStatus,
}: IProps) => {
  const hasNotFound =
    companyStatus === 'not-found' || quoteStatus === 'not-found'
  const hasGenericError = companyStatus === 'error' || quoteStatus === 'error'

  return (
    <Container>
      {(hasGenericError || hasNotFound) && (
        <>
          <Text weight="light" size="xxlg">
            {hasNotFound ? (
              <>
                <span>
                  {
                    'Sorry, we could not find any company with the given symbol '
                  }
                </span>
                <strong>{`"${symbol}"`}</strong>
              </>
            ) : (
              'Sorry, we could not find any company with the given symbol. Please try again later.'
            )}
          </Text>
          {hasNotFound && (
            <Text weight="light" size="sm">
              <p>Try searching for another symbol, such as IBM, AAPL, MSFT.</p>
            </Text>
          )}
        </>
      )}
    </Container>
  )
}
