import { LmFormContainerBaseTypes } from '@tamagui-extras/form';
export type LmDateSelectionProps = LmFormContainerBaseTypes & {
    onChange?: (date: string | null) => void;
    invalidDateMessage?: string;
    value?: string;
    locale?: string;
};
export declare function LmDateSelection({ required, error, helperText, label, labelProps, labelInline, onChange, invalidDateMessage, locale, value, }: LmDateSelectionProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LmDateSelection.d.ts.map