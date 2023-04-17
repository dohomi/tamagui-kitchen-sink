/// <reference types="react" />
import { InputProps, ThemeableStackProps } from 'tamagui';
import { LmFormContainerBaseTypes } from './formContainerTypes';
import { IconProps } from 'tamagui-phosphor-icons';
export type LmInputProps = InputProps & LmFormContainerBaseTypes & {
    containerProps?: ThemeableStackProps;
    multiline?: boolean;
    isPassword?: boolean;
    fullWidth?: boolean;
    passwordIconProps?: IconProps;
};
export declare function LmInput({ required, error, helperText, helperTextProps, label, labelProps, labelInline, multiline, containerProps, isPassword, passwordIconProps, fullWidth, ...rest }: LmInputProps): JSX.Element;
//# sourceMappingURL=LmInput.d.ts.map