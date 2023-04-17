/// <reference types="react" />
import { ColorTokens, SliderProps, SliderThumbProps } from 'tamagui';
import { LmFormContainerBaseTypes } from './formContainerTypes';
export type LmSliderProps = SliderProps & LmFormContainerBaseTypes & {
    defaultValue?: number[];
    color?: ColorTokens | string;
    colorActiveOnly?: boolean;
    thumbProps?: SliderThumbProps;
    showValue?: boolean;
};
export declare function LmSlider({ thumbProps, color, defaultValue, label, labelProps, error, required, helperText, helperTextProps, labelInline, colorActiveOnly, showValue, ...sliderProps }: LmSliderProps): JSX.Element;
//# sourceMappingURL=LmSlider.d.ts.map