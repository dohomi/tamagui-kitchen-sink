import {Popover, PopoverProps, SizeTokens, useDidFinishSSR} from "tamagui";
import {PropsWithChildren, ReactNode} from "react";

export type LmPopoverProps = PropsWithChildren<{
    trigger: ReactNode
    hideArrow?: boolean
    popoverProps?: PopoverProps
    contentPadding?: SizeTokens
    contentSize?: SizeTokens
    isBouncy?: boolean
}>


export function LmPopover({
                              trigger,
                              children,
                              hideArrow,
                              popoverProps,
                              contentPadding = 0,
                              contentSize,
                              isBouncy = true,
                          }: LmPopoverProps
) {
    const isReady = useDidFinishSSR()

    return isReady ? (
        <Popover size="$5" {...popoverProps}>
            <Popover.Trigger asChild>
                {trigger}
            </Popover.Trigger>

            <Popover.Adapt when="sm">
                <Popover.Sheet modal dismissOnSnapToBottom>
                    <Popover.Sheet.Frame padding={'$4'}>
                        <Popover.Sheet.ScrollView>
                            <Popover.Adapt.Contents/>
                        </Popover.Sheet.ScrollView>
                    </Popover.Sheet.Frame>
                    <Popover.Sheet.Overlay/>
                </Popover.Sheet>
            </Popover.Adapt>

            <Popover.Content
                borderWidth={1}
                borderColor="$borderColor"
                {...(isBouncy && {
                    enterStyle: {x: 0, y: -10, opacity: 0},
                    exitStyle: {x: 0, y: -10, opacity: 0},
                    x: 0,
                    y: 0,
                    opacity: 1,
                    animation: "bouncy"
                })}
                elevate
                size={contentSize}
                padding={contentPadding}
            >
                {!hideArrow && (
                    <Popover.Arrow borderWidth={1} borderColor="$borderColor"/>
                )}
                {children}
            </Popover.Content>
        </Popover>
    ) : null
}