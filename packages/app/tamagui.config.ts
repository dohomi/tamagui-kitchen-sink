import {config} from '@my/config'

export type Conf = typeof config

declare module 'tamagui-extras' {
    interface TamaguiCustomConfig extends Conf {
    }
}

export default config
