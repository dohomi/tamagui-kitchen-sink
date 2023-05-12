import { LmRhfProps } from './lmRhfProps';
import { LmSliderProps } from '../LmSlider';
import { FieldValues } from 'react-hook-form';
export type LmSliderRhfProps<T extends FieldValues> = LmSliderProps & LmRhfProps<T> & {};
export declare function LmSliderRhf<T extends FieldValues>({ name, control, rules, defaultValue, ...sliderProps }: LmSliderRhfProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LmSliderRhf.d.ts.map