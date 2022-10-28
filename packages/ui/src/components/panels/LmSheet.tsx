import {Sheet} from "tamagui";
import {PropsWithChildren, useState} from "react";
import {SheetProps} from "@tamagui/sheet/src/types";

type LmSheetProps = PropsWithChildren<SheetProps & {
    hideHandle?: boolean
    fullScreen?: boolean
}>

export function LmSheet({hideHandle, children, fullScreen, snapPoints = [85, 50, 25], ...sheetProps}: LmSheetProps) {
    const [position, setPosition] = useState(0)
    return (
        <Sheet
            modal
            dismissOnSnapToBottom
            position={position}
            onPositionChange={setPosition}
            {...sheetProps}
            snapPoints={fullScreen ? [100, 0] : snapPoints}
            disableDrag={fullScreen ? true : sheetProps.disableDrag}
        >
            <Sheet.Overlay/>
            {!hideHandle && !fullScreen && (
                <Sheet.Handle/>
            )}
            <Sheet.Frame borderRadius={fullScreen ? 0 : undefined}>
                {children}
            </Sheet.Frame>
        </Sheet>
    )
}