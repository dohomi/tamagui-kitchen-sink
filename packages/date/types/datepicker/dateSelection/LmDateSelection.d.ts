import { SizeTokens, ThemeableStackProps } from 'tamagui';
import { LmFormContainerBaseTypes } from '@tamagui-extras/form';
export type LmDateSelectionProps = LmFormContainerBaseTypes & {
    onChange?: (date: string | null) => void;
    invalidDateMessage?: string;
    value?: string;
    locale?: string;
    containerProps?: ThemeableStackProps;
    size?: SizeTokens;
};
export declare function LmDateSelection({ required, error, helperText, helperTextProps, label, labelProps, labelInline, onChange, invalidDateMessage, locale, value, size, containerProps, }: LmDateSelectionProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LmDateSelection.d.ts.map