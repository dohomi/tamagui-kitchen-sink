import { LmAvatar } from '../../../../../core/src'
import { Circle, XStack } from 'tamagui'
import { SolitoImage } from 'solito/image'

export default {
  title: 'core/Content/Avatar',
  component: LmAvatar,
}

export const Basic = {
  args: {
    src: 'https://placekitten.com/400/300',
  },
}

export const Letter = {
  args: {
    letter: 'DM',
  },
}

export const Square = {
  args: {
    letter: 'DM',
    circular: false,
  },
}

export const Sizes = () => (
  <XStack space={'$2'}>
    <LmAvatar size={'$2'} src={'https://placekitten.com/400/300'} />
    <LmAvatar size={'$4'} src={'https://placekitten.com/400/300'} />
    <LmAvatar size={'$6'} src={'https://placekitten.com/400/300'} />
    <LmAvatar size={'$8'} src={'https://placekitten.com/400/300'} />
  </XStack>
)

export const WithSolitoImage = () => (
  <XStack>
    <Circle size={40} overflow={'hidden'}>
      <SolitoImage
        alt={'cat'}
        fill
        style={{}}
        sizes={`40px`}
        resizeMode={'cover'}
        unoptimized
        src={`https://placekitten.com/400/300`}
      />
    </Circle>
  </XStack>
)
