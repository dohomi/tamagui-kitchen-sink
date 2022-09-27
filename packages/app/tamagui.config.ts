import {config} from '@my/config'

export type Conf = typeof config

declare module '@tamagui-extras/ui' {
    interface TamaguiCustomConfig extends Conf {
    }
}

export default config
