import {TamaguiProvider, TamaguiProviderProps} from "@my/ui";
// import {TamaguiProvider, TamaguiProviderProps} from 'tamagui'
import config from '../tamagui.config'

type LmTamaguiProviderProps = Omit<TamaguiProviderProps, 'config'> & {
    defaultTheme?: string
}

export function LmTamaguiProvider({children, ...rest}: LmTamaguiProviderProps) {
    // todo: need to figure out when to disableInjectCSS and when not.. maybe only STORYBOOK mode needs to inject?
    return (
        <TamaguiProvider config={config} disableInjectCSS={!process.env.STORYBOOK} defaultTheme="dark" {...rest}>
            {children}
        </TamaguiProvider>
    )
}