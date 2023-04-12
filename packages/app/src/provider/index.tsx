import { TamaguiProviderProps } from 'tamagui'
import { LmTamaguiProvider } from './LmTamaguiProvider'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  return <LmTamaguiProvider {...rest}>{children}</LmTamaguiProvider>
}
