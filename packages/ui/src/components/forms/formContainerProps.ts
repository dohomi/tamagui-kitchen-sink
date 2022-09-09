import {LabelProps} from "tamagui";

export type FormContainerProps = {
    label?: string
    labelProps?: Omit<LabelProps, 'htmlFor'>
    labelInline?: boolean
    helperText?: string
    required?: boolean
    error?: boolean
}