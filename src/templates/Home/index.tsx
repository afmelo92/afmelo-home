import Header from 'components/Header'

import * as S from './styles'

const HomeTemplate: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Presentation>
        <h3>👋 Hi, I am</h3>
        <h1>Andre Melo</h1>
        <h2>Fullstack developer</h2>
      </S.Presentation>
    </S.Container>
  )
}

export default HomeTemplate
