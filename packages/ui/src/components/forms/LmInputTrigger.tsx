import {styled, ThemeableStack} from "tamagui";

export const LmInputTrigger = styled(ThemeableStack, {
    hoverTheme: true,
    pressTheme: true,
    focusTheme: true,
    bordered: true,
    minHeight: '$4',
    borderRadius: '$4',
    display: 'flex',
    justifyContent: 'center',
    padding: '$4',
})