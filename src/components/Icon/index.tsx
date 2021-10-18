import Image from 'next/image'

import * as S from './styles'

export type IconProps = {
  name?: string
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
}

const Icon = ({
  name = 'instagram',
  size = 'normal',
  hideOnMobile = false
}: IconProps) => {
  return (
    <S.Container size={size} hideOnMobile={hideOnMobile}>
      <Image
        src={`/${name}-icon.png`}
        layout="intrinsic"
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </S.Container>
  )
}

export default Icon
