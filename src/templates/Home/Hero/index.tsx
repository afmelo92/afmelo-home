import Icon from 'components/Icon'

import * as S from './styles'

const HomeHeroTemplate: React.FC = () => {
  return (
    <>
      <S.Main>
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
      </S.Main>
      <S.Social>
        <a href="https://github.com/afmelo92" target="_blank" rel="noreferrer">
          <Icon name="github" />
        </a>
        <a
          href="https://instagram.com/afmelo.sh"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="instagram" />
        </a>
        <a
          href="https://behance.net/fabianmelo2"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="behance" />
        </a>
        <a
          href="https://www.linkedin.com/in/afdmelo/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="linkedin" />
        </a>
      </S.Social>
    </>
  )
}

export default HomeHeroTemplate
