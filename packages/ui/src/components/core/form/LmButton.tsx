import { Button, ButtonProps, Spinner, TamaguiComponent } from 'tamagui'
import { colormap, ThemeColors } from '../../../themeMappings'
import { forwardRef } from 'react'

export type LmButtonProps = ButtonProps & {
  colorVariant?: ThemeColors
  loading?: boolean
}

export const LmButton = forwardRef(function LmButtonFunc(
  { loading, colorVariant, ...props }: LmButtonProps,
  ref
) {
  return (
    <Button
      {...props}
      ref={ref as TamaguiComponent}
      theme={colorVariant ? colormap[colorVariant] : props.theme}
      {...(loading && {
        icon: <Spinner />,
        disabled: true,
      })}
    />
  )
})
