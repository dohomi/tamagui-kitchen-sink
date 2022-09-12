import {NavigationProvider} from './navigation'
import {TamaguiProviderProps} from '@my/ui'
import {LmTamaguiProvider} from "./LmTamaguiProvider";
import {LmNhostProvider} from "app/provider/LmNhostProvider";

export function Provider({children, ...rest}: Omit<TamaguiProviderProps, 'config'>) {
    return (
        <LmTamaguiProvider {...rest}>
            <LmNhostProvider>
                <NavigationProvider>{children}</NavigationProvider>
            </LmNhostProvider>
        </LmTamaguiProvider>
    )
}
