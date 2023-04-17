import { ReactNode } from 'react';
import { ParagraphProps, SizeTokens, XStackProps } from 'tamagui';
export type LmCheckboxProps = XStackProps & {
    label?: ReactNode;
    onChange?: (bool: boolean) => void;
    value?: boolean;
    error?: boolean;
    helperText?: ReactNode;
    helperTextProps?: ParagraphProps;
    size?: SizeTokens;
    required?: boolean;
};
export declare function LmCheckbox({ label, onChange, error, helperText, size, value, required, theme, helperTextProps, ...stackProps }: LmCheckboxProps): JSX.Element;
//# sourceMappingURL=LmCheckbox.d.ts.map