import { DialogProps, SizeTokens } from 'tamagui';
import { ReactNode } from 'react';
import { LmDialogActions } from './LmDialogActions';
import { LmDialogContent } from './LmDialogContent';
type LmDialogProps = DialogProps & {
    trigger?: ReactNode;
    title?: string;
    description?: string;
    hideCloseButton?: boolean;
    fullScreen?: boolean;
    contentPadding?: SizeTokens;
    dialogHeight?: string | number;
    dialogWidth?: string | number;
};
export declare function LmDialog({ children, trigger, title, description, hideCloseButton, fullScreen, contentPadding, dialogWidth, dialogHeight, ...dialogProps }: LmDialogProps): JSX.Element;
export declare namespace LmDialog {
    var Actions: typeof LmDialogActions;
    var Content: typeof LmDialogContent;
}
export {};
//# sourceMappingURL=LmDialog.d.ts.map