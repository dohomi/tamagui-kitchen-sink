import { InputProps, ThemeableStackProps } from 'tamagui';
import { LmFormContainerBaseTypes } from './formContainerTypes';
import { IconProps } from '@tamagui-extras/core';
export type LmInputProps = InputProps & LmFormContainerBaseTypes & {
    containerProps?: ThemeableStackProps;
    multiline?: boolean;
    isPassword?: boolean;
    fullWidth?: boolean;
    passwordIconProps?: IconProps;
};
export declare function LmInput({ required, error, helperText, helperTextProps, label, labelProps, labelInline, multiline, containerProps, isPassword, passwordIconProps, fullWidth, ...rest }: LmInputProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LmInput.d.ts.map