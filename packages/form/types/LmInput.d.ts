/// <reference types="react" />
import { InputProps } from 'tamagui';
import { LmFormContainerBaseTypes } from './formContainerTypes';
import { IconProps } from '@tamagui-extras/core';
export type LmInputProps = InputProps & LmFormContainerBaseTypes & {
    multiline?: boolean;
    isPassword?: boolean;
    fullWidth?: boolean;
    passwordIconProps?: IconProps;
};
export declare const LmInput: import("react").ForwardRefExoticComponent<Omit<import("react-native").TextInputProps & Omit<import("tamagui").TextProps, keyof import("react-native").TextInputProps> & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("tamagui").SizeTokens | undefined;
} & import("@tamagui/web").PseudoProps<Partial<import("react-native").TextInputProps & Omit<import("tamagui").TextProps, keyof import("react-native").TextInputProps> & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("tamagui").SizeTokens | undefined;
}>> & import("@tamagui/web").MediaProps<Partial<import("react-native").TextInputProps & Omit<import("tamagui").TextProps, keyof import("react-native").TextInputProps> & {
    readonly unstyled?: boolean | undefined;
    readonly size?: import("tamagui").SizeTokens | undefined;
}>>, "placeholderTextColor"> & {
    placeholderTextColor?: import("@tamagui/web").ColorStyleProp | undefined;
    rows?: number | undefined;
} & LmFormContainerBaseTypes & {
    multiline?: boolean | undefined;
    isPassword?: boolean | undefined;
    fullWidth?: boolean | undefined;
    passwordIconProps?: IconProps | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=LmInput.d.ts.map