import { LmImage } from '../../../src'

export default {
  title: 'ui/Content/Image',
  component: LmImage,
}

export const Basic = {
  args: {
    width: 400,
    height: 300,
    src: imageSrc,
  },
}

const imageSrc = 'https://placekitten.com/400/300'
