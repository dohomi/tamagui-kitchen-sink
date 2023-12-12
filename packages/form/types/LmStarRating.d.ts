import { SizeTokens, XStackProps } from 'tamagui';
import { ComponentType } from 'react';
import { LmFormContainerBaseTypes } from './formContainerTypes';
import { IconProps } from '@tamagui-extras/core';
export type LmStarRatingProps = LmFormContainerBaseTypes & {
    count?: number;
    onChange?: (rating: number | null) => void;
    value?: number | null;
    size?: SizeTokens;
    disabled?: boolean;
    iconProps?: IconProps;
    gap?: XStackProps['gap'];
    Icon?: ComponentType<IconProps>;
    colorActive?: IconProps['color'];
    colorHover?: IconProps['color'];
    colorActiveHover?: IconProps['color'];
    color?: IconProps['color'];
};
export declare function LmStarRating({ count, onChange, value, disabled, required, error, helperText, helperTextProps, label, labelInline, labelProps, containerProps, iconProps, gap, Icon, size, colorHover, colorActiveHover, colorActive, color, ...sizeableStackProps }: LmStarRatingProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LmStarRating.d.ts.map