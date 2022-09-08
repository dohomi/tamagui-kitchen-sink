import {NavigationProvider} from './navigation'
import {TamaguiProviderProps} from '@my/ui'
import {LmTamaguiProvider} from "./LmTamaguiProvider";

export function Provider({children, ...rest}: Omit<TamaguiProviderProps, 'config'>) {
    return (
        <LmTamaguiProvider {...rest} defaultTheme={'light'}>
            <NavigationProvider>{children}</NavigationProvider>
        </LmTamaguiProvider>
    )
}
