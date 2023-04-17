/// <reference types="react" />
import { FieldValues } from 'react-hook-form';
import { LmDateSelectionProps } from '../dateSelection/LmDateSelection';
import { LmRhfProps } from '@tamagui-extras/form';
export type LmDateSelectionRhfProps<T extends FieldValues> = LmRhfProps<T> & LmDateSelectionProps;
export declare function LmDateSelectionRhf<T extends FieldValues>({ name, defaultValue, control, rules, ...rest }: LmDateSelectionRhfProps<T>): JSX.Element;
//# sourceMappingURL=LmDateSelectionRhf.d.ts.map