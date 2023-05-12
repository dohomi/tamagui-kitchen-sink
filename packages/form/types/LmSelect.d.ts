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
export declare function LmSelect({ value, colorVariant, themeName, options, width, placeholder, dropDownLabel, required, error, helperText, helperTextProps, label, labelInline, labelProps, fullWidth, defaultValue, onValueChange, ...rest }: LmSelectProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LmSelect.d.ts.map