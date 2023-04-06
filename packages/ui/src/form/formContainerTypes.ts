import { LabelProps } from 'tamagui'

export type LmFormContainerBaseTypes = {
  label?: string
  labelProps?: Omit<LabelProps, 'htmlFor'>
  labelInline?: boolean
  helperText?: string
  required?: boolean
  error?: boolean
}
