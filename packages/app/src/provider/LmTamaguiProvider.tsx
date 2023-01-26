import {TamaguiProvider, TamaguiProviderProps} from 'tamagui'
import {IconContextProvider} from 'tamagui-phosphor-icons'
import config from '../../tamagui.config'

type LmTamaguiProviderProps = Omit<TamaguiProviderProps, 'config'>

export function LmTamaguiProvider({children, ...rest}: LmTamaguiProviderProps) {
    return (
        <TamaguiProvider config={config} disableInjectCSS={!process.env.STORYBOOK} {...rest}>
            <IconContextProvider value={{color: '$color'}}>
            {children}
            </IconContextProvider>
        </TamaguiProvider>
    )
}