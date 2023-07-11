import { ThemeName } from 'tamagui'

export type ThemeColors = 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error'
export const colormap: { [k in ThemeColors]: ThemeName } = {
  success: 'green',
  error: 'red',
  info: 'blue',
  primary: 'blue',
  secondary: 'gray' as ThemeName,
  warning: 'orange',
}
