import { ReactNode } from 'react';
import { CheckboxProps, CheckedState, LabelProps, ParagraphProps, SizeTokens, XStackProps } from 'tamagui';
export type LmCheckboxProps = XStackProps & {
    checkboxProps?: Omit<CheckboxProps, 'disabled'>;
    label?: ReactNode;
    onChange?: (state: CheckedState) => void;
    value?: boolean;
    error?: boolean;
    helperText?: ReactNode;
    helperTextProps?: ParagraphProps;
    size?: SizeTokens;
    required?: boolean;
    labelProps?: Omit<LabelProps, 'htmlFor' | 'ref'>;
};
export declare function LmCheckbox({ label, onChange, error, helperText, size, value, required, theme, helperTextProps, checkboxProps, labelProps, disabled, ...stackProps }: LmCheckboxProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LmCheckbox.d.ts.map