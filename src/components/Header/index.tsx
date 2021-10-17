import Logo from 'components/Logo'
import Link from 'next/link'

import * as S from './styles'

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Nav>
        <S.LinkWrapper>
          <Link href="/" passHref>
            <S.Link>Home</S.Link>
          </Link>
          <Link href="/" passHref>
            <S.Link>About</S.Link>
          </Link>
        </S.LinkWrapper>

        <Logo />

        <S.LinkWrapper>
          <Link href="/" passHref>
            <S.Link>Portfolio</S.Link>
          </Link>
          <Link href="/" passHref>
            <S.Link>Contact</S.Link>
          </Link>
        </S.LinkWrapper>
      </S.Nav>
    </S.Container>
  )
}

export default Header
