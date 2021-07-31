import styled from 'styled-components'

export const AutoCompleteContainer = styled.div`
  position: absolute;
  display: flex;
  top: 52px;
  background: #ffffff;
  max-height: 240px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 8px 16px -6px rgb(0 0 0 / 12%);
  width: 100%;
`

export const AutoCompleteList = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  padding: 8px;
`
export const AutoCompleteItem = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 36px 1fr;
  grid-gap: 4px;
  padding: 8px;
  transition: color 0.1s ease-in;

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  :hover {
    color: #ff3c64;
  }
`
