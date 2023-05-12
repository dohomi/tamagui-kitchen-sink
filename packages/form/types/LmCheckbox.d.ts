import { ReactNode } from 'react';
import { CheckboxProps, CheckedState, ParagraphProps, SizeTokens, XStackProps } from 'tamagui';
export type LmCheckboxProps = XStackProps & {
    checkboxProps?: CheckboxProps;
    label?: ReactNode;
    onChange?: (state: CheckedState) => void;
    value?: boolean;
    error?: boolean;
    helperText?: ReactNode;
    helperTextProps?: ParagraphProps;
    size?: SizeTokens;
    required?: boolean;
};
export declare function LmCheckbox({ label, onChange, error, helperText, size, value, required, theme, helperTextProps, checkboxProps, ...stackProps }: LmCheckboxProps): JSX.Element;
//# sourceMappingURL=LmCheckbox.d.ts.map