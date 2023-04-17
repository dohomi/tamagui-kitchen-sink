/// <reference types="react" />
import { LmRhfProps } from '@tamagui-extras/form';
import { FieldValues } from 'react-hook-form';
import { LmRichTextProps } from './richTextTypes';
export type LmRichTextRhfProps<T extends FieldValues> = LmRichTextProps & LmRhfProps<T> & {};
export declare function LmRichTextRhf<T extends FieldValues>({ name, control, rules, defaultValue, ...inputProps }: LmRichTextRhfProps<T>): JSX.Element;
//# sourceMappingURL=LmRichTextRhf.d.ts.map