import { FieldValues } from 'react-hook-form';
import { LmDatepickerProps } from '../datepickerTypes';
import { LmRhfProps } from '@tamagui-extras/form';
export type LmDatepickerRhf<T extends FieldValues> = LmRhfProps<T> & LmDatepickerProps;
export declare function LmDatepickerRhf<T extends FieldValues>({ name, defaultValue, control, rules, required, ...datepickerProps }: LmDatepickerRhf<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LmDatepickerRhf.d.ts.map