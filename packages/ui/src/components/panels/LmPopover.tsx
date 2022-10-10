import {Popover, PopoverProps, SizeTokens} from "tamagui";
import {PropsWithChildren, ReactNode} from "react";

export type LmPopoverProps = PropsWithChildren<{
    trigger: ReactNode
    hideArrow?: boolean
    popoverProps?: PopoverProps
    contentPadding?: SizeTokens
    contentSize?: SizeTokens
}>


export function LmPopover({
                              trigger,
                              children,
                              hideArrow,
                              popoverProps,
                              contentPadding = 0,
                              contentSize
                          }: LmPopoverProps
) {

    return (
        <Popover sheetBreakpoint="sm" size="$5" {...popoverProps}>
            <Popover.Trigger asChild>
                {trigger}
            </Popover.Trigger>

            <Popover.Sheet modal dismissOnSnapToBottom>
                <Popover.Sheet.Frame padding={'$4'}>
                    <Popover.Sheet.ScrollView>
                        <Popover.SheetContents/>
                    </Popover.Sheet.ScrollView>
                </Popover.Sheet.Frame>
                <Popover.Sheet.Overlay/>
            </Popover.Sheet>

            <Popover.Content
                bw={1}
                boc="$borderColor"
                enterStyle={{x: 0, y: -10, o: 0}}
                exitStyle={{x: 0, y: -10, o: 0}}
                x={0}
                y={0}
                o={1}
                animation="bouncy"
                elevate
                size={contentSize}
                padding={contentPadding}
            >
                {!hideArrow && (
                    <Popover.Arrow bw={1} boc="$borderColor"/>
                )}
                {children}
            </Popover.Content>
        </Popover>
    )
}