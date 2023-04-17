import { ScrollViewProps } from 'tamagui';
import { PropsWithChildren } from 'react';
import { SheetProps } from '@tamagui/sheet/src/types';
export type LmSheetProps = PropsWithChildren<SheetProps & {
    hideHandle?: boolean;
    fullScreen?: boolean;
    enableScroll?: boolean;
    scrollviewProps?: ScrollViewProps;
}>;
export declare function LmSheet({ hideHandle, children, fullScreen, snapPoints, enableScroll, scrollviewProps, ...sheetProps }: LmSheetProps): JSX.Element;
//# sourceMappingURL=LmSheet.d.ts.map