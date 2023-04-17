import { PopoverContentProps, PopoverProps } from 'tamagui';
import { ReactNode } from 'react';
import { LmSheetProps } from './LmSheet';
export type LmPopoverProps = PopoverProps & {
    trigger?: ReactNode;
    hideArrow?: boolean;
    contentProps?: PopoverContentProps;
    isBouncy?: boolean;
    sheetProps?: LmSheetProps;
};
export declare function LmPopover({ trigger, children, hideArrow, contentProps, isBouncy, sheetProps, ...popoverProps }: LmPopoverProps): JSX.Element;
//# sourceMappingURL=LmPopover.d.ts.map