import React from 'react'
import styled from 'styled-components'

import GlobalStyles from "./components/common/GlobalStyles"

const Root = styled.div`
  font-family: 'SpoqaHanSansNeo-Regular';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ColumnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`

const CenterColumnContainer = styled(ColumnContainer)`
  align-items: center;
`

const Header = styled.h1`
  font-family: 'SpoqaHanSansNeo-Bold';
  font-size: 3.25rem;
  margin: 0;
`

const SubHeader = styled.h2`
  margin: 0;
`

const UnderlineInput = styled.input`
  font-family: 'SpoqaHanSansNeo-Regular';
  font-size: 1.5rem;
  border: 0;
  border-bottom: 1px solid #ddd;
  &:focus {
    outline: none;
  }
`

const App = () => {
  return (
    <Root>
      <GlobalStyles />
      <div>
        <img src="/images/main.gif" alt="main gif" />
      </div>
      <ColumnContainer>
        <CenterColumnContainer>
          <Header>ㅅㄴㅇ ㅋㄹ</Header>
          <SubHeader>THE SALTY SPITOON</SubHeader>
        </CenterColumnContainer>
        <div>
          <UnderlineInput placeholder="소환사명 입력" />
          <button>멤버 등록</button>
        </div>
      </ColumnContainer>
    </Root>
  )
}

export default App
