/// <reference types="react" />
import { LmRhfProps } from './lmRhfProps';
import { LmSliderProps } from '../LmSlider';
import { FieldValues } from 'react-hook-form';
export type LmSliderRhfProps<T extends FieldValues> = LmSliderProps & LmRhfProps<T> & {};
export declare function LmSliderRhf<T extends FieldValues>({ name, control, rules, defaultValue, ...sliderProps }: LmSliderRhfProps<T>): JSX.Element;
//# sourceMappingURL=LmSliderRhf.d.ts.map