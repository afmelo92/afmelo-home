import * as S from './styles'

export type LogoProps = {
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
}

const Logo: React.FC<LogoProps> = ({
  size = 'normal',
  hideOnMobile = false
}) => {
  return (
    <S.Container size={size} hideOnMobile={hideOnMobile}>
      <svg
        version="1.2"
        baseProfile="tiny-ps"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <defs>
          <linearGradient
            id="grd1"
            gradientUnits="userSpaceOnUse"
            x1="331.259"
            y1="424.589"
            x2="331.259"
            y2="125.069"
          >
            <stop offset="0" stopColor="#067116" />
            <stop offset=".99" stopColor="#15f008" />
          </linearGradient>
          <image
            width="512"
            height="512"
            id="img1"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAAAXNSR0IB2cksfwAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAA2SURBVHic7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwbggAAAdJ4ifAAAAAASUVORK5CYII="
          />
        </defs>
        <use id="Background" href="#img1" x="0" y="0" />
        <path
          id="Layer 1"
          d="m252 412.11-180.13-312h360.26L252 412.11Z"
          fill="url(#grd1)"
        />
      </svg>
    </S.Container>
  )
}

export default Logo
