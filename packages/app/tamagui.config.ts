import { config } from 'tamagui-extras'

export type Conf = typeof config

declare module 'tamagui-extras' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config
