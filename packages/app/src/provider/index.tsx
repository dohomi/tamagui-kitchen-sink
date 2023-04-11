import { TamaguiProviderProps } from 'tamagui'
import { LmTamaguiProvider } from './LmTamaguiProvider'
import { SafeArea } from './safe-area/SaveAreaProvider'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <SafeArea>
      <LmTamaguiProvider {...rest}>{children}</LmTamaguiProvider>
    </SafeArea>
  )
}
