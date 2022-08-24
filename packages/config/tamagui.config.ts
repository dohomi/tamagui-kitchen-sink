import {config as defaultConfig} from '@tamagui/config-base'
import {createTamagui} from 'tamagui'

const tamaConf = createTamagui(defaultConfig)

export type Conf = typeof tamaConf

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {
  }
}
export const config = tamaConf