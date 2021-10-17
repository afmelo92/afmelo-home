import Header from 'components/Header'

import HomeHeroTemplate from './Hero'
import HomePortfolioTemplate from './Portfolio'
import * as S from './styles'

const HomeTemplate: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Logo />
      <HomeHeroTemplate />
      <HomePortfolioTemplate />
    </S.Container>
  )
}

export default HomeTemplate
