import React from 'react'

import * as S from './styles'

const HomeHeroTemplate: React.FC = () => {
  return (
    <S.Presentation>
      <S.Greeting>
        <h3>👋 Hi, I am</h3>
        <h1>Andre Melo</h1>
        <h2>fullstack developer</h2>
      </S.Greeting>
      <S.Details>
        <h2>nice to meet you!</h2>
        <h1>A dev who loves to code React and NodeJS apps</h1>
        <h3>Dourados/MS | Brazil</h3>
      </S.Details>
    </S.Presentation>
  )
}

export default HomeHeroTemplate
