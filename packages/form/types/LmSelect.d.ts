/// <reference types="react" />
import { SelectProps, ThemeProps } from 'tamagui';
import { ThemeColors } from '@tamagui-extras/core';
import { LmFormContainerBaseTypes } from './formContainerTypes';
export type LmSelectProps = SelectProps & LmFormContainerBaseTypes & {
    value?: string;
    options: {
        label: string;
        value: string | number;
    }[];
    colorVariant?: ThemeColors;
    themeName?: ThemeProps['name'];
    width?: number | string;
    placeholder?: string;
    dropDownLabel?: string;
    fullWidth?: boolean;
};
export declare const LmSelect: import("react").ForwardRefExoticComponent<SelectProps & LmFormContainerBaseTypes & {
    value?: string | undefined;
    options: {
        label: string;
        value: string | number;
    }[];
    colorVariant?: ThemeColors | undefined;
    themeName?: ThemeProps['name'];
    width?: string | number | undefined;
    placeholder?: string | undefined;
    dropDownLabel?: string | undefined;
    fullWidth?: boolean | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=LmSelect.d.ts.map