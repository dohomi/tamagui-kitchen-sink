import {TamaguiProvider, TamaguiProviderProps} from "@my/ui";
import config from '../tamagui.config'

export function LmTamaguiProvider({children, ...rest}: Omit<TamaguiProviderProps, 'config'>) {
    return (
        <TamaguiProvider config={config} disableInjectCSS defaultTheme="light" {...rest}>
            {children}
        </TamaguiProvider>
    )
}