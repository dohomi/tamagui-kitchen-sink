import { TamaguiProvider, TamaguiProviderProps } from 'tamagui'
import { IconContextProvider } from 'tamagui-phosphor-icons'
import config from '../../tamagui.config'
import { useThemeNameState } from 'app/src/state/themeState'

type LmTamaguiProviderProps = Omit<TamaguiProviderProps, 'config'>

export function LmTamaguiProvider({ children, ...rest }: LmTamaguiProviderProps) {
  const theme = useThemeNameState(rest.defaultTheme as any)
  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS={!process.env.STORYBOOK}
      defaultTheme={theme}
      {...rest}
    >
      <IconContextProvider value={{ color: '$color' }}>{children}</IconContextProvider>
    </TamaguiProvider>
  )
}
