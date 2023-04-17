/// <reference types="react" />
import { FieldValues } from 'react-hook-form';
import { LmRhfProps } from './lmRhfProps';
import { LmAutocompleteProps } from '../LmAutocomplete';
export type LmAutocompleteRhfProps<T extends FieldValues> = LmRhfProps<T> & LmAutocompleteProps & {
    matchId?: boolean;
};
export declare function LmAutocompleteRhf<T extends FieldValues = FieldValues>({ name, rules, control, defaultValue, matchId, options, multiple, ...inputProps }: LmAutocompleteRhfProps<T>): JSX.Element;
//# sourceMappingURL=LmAutocompleteRhf.d.ts.map