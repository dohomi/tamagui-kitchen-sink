/// <reference types="react" />
import { LmFormContainerBaseTypes } from './formContainerTypes';
import { RadioGroupProps, SizeTokens, SpaceTokens } from 'tamagui';
export type LmRadioGroupProps = RadioGroupProps & LmFormContainerBaseTypes & {
    options: {
        label: string;
        value: string;
    }[];
    size?: SizeTokens;
    name?: string;
    spaceItem?: SpaceTokens;
};
export declare function LmRadioGroup({ options, required, error, helperText, helperTextProps, label, labelInline, labelProps, size, spaceItem, ...rest }: LmRadioGroupProps): JSX.Element;
//# sourceMappingURL=LmRadioGroup.d.ts.map