/// <reference types="react" />
import { LmSelectProps } from '../LmSelect';
import { FieldValues } from 'react-hook-form';
import { LmRhfProps } from './lmRhfProps';
export type LmSelectRhfProps<T extends FieldValues> = LmSelectProps & LmRhfProps<T> & {};
export declare function LmSelectRhf<T extends FieldValues>({ name, control, rules, defaultValue, ...inputProps }: LmSelectRhfProps<T>): JSX.Element;
//# sourceMappingURL=LmSelectRhf.d.ts.map