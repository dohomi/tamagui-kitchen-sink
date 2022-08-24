// @ts-ignore
import config from '../tamagui.config'
import {TamaguiProvider, TamaguiProviderProps} from "tamagui";
export function LmTamaguiProvider({children, ...rest}: Omit<TamaguiProviderProps, 'config'>) {
    return (
        <TamaguiProvider config={config} disableInjectCSS defaultTheme="light" {...rest}>
            {children}
        </TamaguiProvider>
    )
}