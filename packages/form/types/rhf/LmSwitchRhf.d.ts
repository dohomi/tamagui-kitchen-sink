import { FieldValues } from 'react-hook-form';
import { LmRhfProps } from './lmRhfProps';
import { LmSwitchProps } from '../LmSwitch';
export type LmSwitchRhfProps<T extends FieldValues> = LmSwitchProps & LmRhfProps<T> & {};
export declare function LmSwitchRhf<T extends FieldValues>({ name, control, rules, defaultValue, ...inputProps }: LmSwitchRhfProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LmSwitchRhf.d.ts.map