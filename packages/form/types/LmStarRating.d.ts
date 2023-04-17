/// <reference types="react" />
import { SizeTokens } from 'tamagui';
import { LmFormContainerBaseTypes } from './formContainerTypes';
export type LmStarRatingProps = LmFormContainerBaseTypes & {
    count?: number;
    onChange?: (rating: number | null) => void;
    value?: number | null;
    size?: SizeTokens;
    disabled?: boolean;
};
export declare function LmStarRating({ count, onChange, value, disabled, required, error, helperText, helperTextProps, label, labelInline, labelProps, ...iconProps }: LmStarRatingProps): JSX.Element;
//# sourceMappingURL=LmStarRating.d.ts.map