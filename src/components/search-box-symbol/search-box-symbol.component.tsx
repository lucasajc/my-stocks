import React, { useEffect, useMemo, useState } from 'react'
import { SearchBox } from 'components/search-box/search-box.component'
import StockSymbol from 'client-api/symbol/symbol.model'
import { Text } from 'components/text/text.component'
import {
  AutoCompleteContainer,
  AutoCompleteItem,
  AutoCompleteList,
} from 'components/search-box-symbol/search-box-symbol.styled'
import { useSymbols } from 'common/hooks/use-symbols/use-symbols.hook'

interface IProps {
  onSearch: (searchText: string) => void
  placeholder?: string
}

export const SearchBoxSymbol = ({ onSearch, placeholder }: IProps) => {
  const { symbols } = useSymbols()
  const [showDropdown, setShowDropdown] = useState<boolean>()
  const [searchText, setSearchText] = useState<string>('')

  const matchedSymbols: StockSymbol[] = useMemo(() => {
    if (searchText && symbols) {
      return symbols
        .filter((symbol: StockSymbol) =>
          symbol.symbol.toUpperCase().startsWith(searchText.toUpperCase())
        )
        .slice(0, 10)
    }
    return []
  }, [symbols, searchText])

  useEffect(() => {
    setShowDropdown(matchedSymbols.length > 0)
  }, [matchedSymbols])

  useEffect(() => {
    const onClickCallback = () => {
      setShowDropdown(false)
    }
    window.addEventListener('click', onClickCallback)
    return () => window.removeEventListener('click', onClickCallback)
  }, [])

  return (
    <SearchBox
      placeholder={placeholder}
      onChangeSearchText={setSearchText}
      onSearch={onSearch}
    >
      {showDropdown && (
        <AutoCompleteContainer>
          <AutoCompleteList>
            {matchedSymbols.map(({ symbol, name }) => (
              <AutoCompleteItem key={symbol} onClick={() => onSearch(symbol)}>
                <Text weight="bold" size="md">
                  {symbol}
                </Text>
                <Text weight="light" size="md">
                  {name}
                </Text>
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoCompleteContainer>
      )}
    </SearchBox>
  )
}
