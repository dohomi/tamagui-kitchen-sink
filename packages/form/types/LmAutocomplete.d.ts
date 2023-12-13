import { SizeTokens, ThemeName } from 'tamagui';
import { LmFormContainerBaseTypes } from './formContainerTypes';
import { LmPopoverProps } from '@tamagui-extras/core';
type Option = {
    label: string;
    value: string | number;
};
export type LmAutocompleteProps = LmFormContainerBaseTypes & {
    options: Option[];
    multiple?: boolean;
    value?: null | Option | Option[];
    onChange?: (v: null | Option | Option[]) => void;
    placeholderSearch?: string;
    disableSearch?: boolean;
    theme?: ThemeName;
    allowNew?: boolean;
    allowNewHook?: (newValue: string) => Option;
    popoverProps?: LmPopoverProps;
    size?: SizeTokens;
};
export declare function LmAutocomplete({ options, labelInline, labelProps, helperText, helperTextProps, required, label, value, onChange, error, theme, allowNewHook, multiple, popoverProps, containerProps, size, ...rest }: LmAutocompleteProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LmAutocomplete.d.ts.map