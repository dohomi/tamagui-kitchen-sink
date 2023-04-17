/// <reference types="react" />
import { ThemeName } from 'tamagui';
import { LmFormContainerBaseTypes } from './formContainerTypes';
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
};
export declare function LmAutocomplete({ options, labelInline, labelProps, helperText, helperTextProps, required, label, value, onChange, error, theme, allowNewHook, multiple, ...rest }: LmAutocompleteProps): JSX.Element;
export {};
//# sourceMappingURL=LmAutocomplete.d.ts.map