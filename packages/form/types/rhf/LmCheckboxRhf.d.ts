import { FieldValues } from 'react-hook-form';
import { LmRhfProps } from './lmRhfProps';
import { LmCheckboxProps } from '../LmCheckbox';
type LmCheckboxRhfProps<T extends FieldValues> = LmCheckboxProps & LmRhfProps<T>;
export declare function LmCheckboxRhf<T extends FieldValues>({ name, rules, control, defaultValue, ...inputProps }: LmCheckboxRhfProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LmCheckboxRhf.d.ts.map