/// <reference types="react" />
import { LmButtonProps } from '@tamagui-extras/core';
import { FieldValues, UseFormReturn } from 'react-hook-form';
export type LmButtonRhfProps<T extends FieldValues> = LmButtonProps & {
    onSubmit: (data: T, context: UseFormReturn<T, any>) => void | Promise<void>;
};
export declare function LmSubmitButtonRhf<TFieldValues extends FieldValues = FieldValues>({ onSubmit, ...props }: LmButtonRhfProps<TFieldValues>): JSX.Element;
//# sourceMappingURL=LmSubmitButtonRhf.d.ts.map