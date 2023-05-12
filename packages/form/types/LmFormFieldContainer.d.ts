import { SizeTokens, ThemeableStackProps } from 'tamagui';
import { LmFormContainerBaseTypes } from './formContainerTypes';
type LmFormContainerProps = ThemeableStackProps & LmFormContainerBaseTypes & {
    id?: string;
    size?: SizeTokens;
    fullWidth?: boolean;
};
export declare function LmFormFieldContainer({ label, children, helperText, id, size, labelProps, required, error, helperTextProps, ...rest }: LmFormContainerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LmFormFieldContainer.d.ts.map