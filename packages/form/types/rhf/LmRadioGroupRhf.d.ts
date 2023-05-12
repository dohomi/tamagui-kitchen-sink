import { LmRhfProps } from './lmRhfProps';
import { LmRadioGroupProps } from '../LmRadioGroup';
import { FieldValues } from 'react-hook-form';
export type LmRadioGroupRhfProps<T extends FieldValues> = LmRadioGroupProps & LmRhfProps<T> & {};
export declare function LmRadioGroupRhf<T extends FieldValues>({ name, control, rules, defaultValue, ...rest }: LmRadioGroupRhfProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LmRadioGroupRhf.d.ts.map