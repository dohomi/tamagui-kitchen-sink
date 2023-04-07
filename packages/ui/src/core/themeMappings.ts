import {ThemeProps} from "tamagui";

export type ThemeColors = 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error'
export const colormap: { [k in ThemeColors]: ThemeProps['name'] } = {
    success: 'green_alt1',
    error: 'red_alt1',
    info: 'blue_alt1',
    primary: 'blue_alt1',
    secondary: 'gray_alt2',
    warning: 'orange_alt2'
}