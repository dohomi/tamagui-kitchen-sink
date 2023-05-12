import { FieldValues } from 'react-hook-form';
import { LmInputProps } from '../LmInput';
import { LmRhfProps } from './lmRhfProps';
export type LmInputRhfProps<T extends FieldValues = FieldValues> = LmInputProps & LmRhfProps<T>;
export declare function LmInputRhf<T extends FieldValues = FieldValues>({ name, control, rules, defaultValue, ...inputProps }: LmInputRhfProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LmInputRhf.d.ts.map