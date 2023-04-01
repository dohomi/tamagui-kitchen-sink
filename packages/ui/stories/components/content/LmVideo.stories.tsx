import React from 'react'
import { LmVideo } from '../../../src'

export default {
  title: 'ui/Content/Video',
  // component: LmVideoNative // can not parse ...
}

const Template = (args) => <LmVideo {...args} />

export const Basic = {
  render: Template,

  args: {
    src: uri,
  },
}

const uri = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'

export const Width200 = {
  render: Template,

  args: {
    src: uri,
    width: 200,
  },
}

export const Height200 = {
  render: Template,

  args: {
    src: uri,
    height: 200,
  },
}
