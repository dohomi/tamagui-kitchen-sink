import { FieldValues, UseFormProps, UseFormReturn } from 'react-hook-form';
import { ReactNode } from 'react';
export type LmFormRhfProviderProps<T extends FieldValues = FieldValues> = UseFormProps<T> & {
    children: ((context: UseFormReturn<T>) => ReactNode) | ReactNode;
    forceFormProvider?: boolean;
};
export declare function LmFormRhfProvider<T extends FieldValues = FieldValues>({ children, forceFormProvider, ...formProps }: LmFormRhfProviderProps<T>): JSX.Element;
//# sourceMappingURL=LmFormRhfProvider.d.ts.map