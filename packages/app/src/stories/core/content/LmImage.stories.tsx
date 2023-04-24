import { LmImage } from '../../../../../core/src'

export default {
  title: 'core/Content/Image',
  component: LmImage,
}
const imageSrc = 'https://placekitten.com/400/300'

export const Basic = {
  args: {
    width: 400,
    height: 300,
    src: imageSrc,
  },
}
