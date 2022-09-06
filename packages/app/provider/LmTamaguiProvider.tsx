import {TamaguiProvider, TamaguiProviderProps} from "@my/ui";
// import {TamaguiProvider, TamaguiProviderProps} from 'tamagui'
import config from '../tamagui.config'

type LmTamaguiProviderProps = Omit<TamaguiProviderProps, 'config'>

export function LmTamaguiProvider({children, ...rest}: LmTamaguiProviderProps) {
    return (
        <TamaguiProvider config={config} disableInjectCSS={!process.env.STORYBOOK} {...rest}>
            {children}
        </TamaguiProvider>
    )
}