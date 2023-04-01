import React from 'react'
import { LmVideo } from '../../../src'

export default {
  title: 'ui/Content/Video',
  component: LmVideo, // can not parse ...
}

const uri = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
export const Basic = {
  args: {
    src: uri,
  },
}

export const Width200 = {
  args: {
    src: uri,
    width: 200,
  },
}

export const Height200 = {
  args: {
    src: uri,
    height: 200,
  },
}
