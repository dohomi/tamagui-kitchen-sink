/// <reference types="react" />
import { FieldValues } from 'react-hook-form';
import { LmRhfProps } from './lmRhfProps';
import { LmStarRatingProps } from '../LmStarRating';
export type LmStarRatingRhfProps<T extends FieldValues> = LmStarRatingProps & LmRhfProps<T> & {};
export declare function LmStarRatingRhf<T extends FieldValues>({ name, control, rules, defaultValue, ...inputProps }: LmStarRatingRhfProps<T>): JSX.Element;
//# sourceMappingURL=LmStarRatingRhf.d.ts.map