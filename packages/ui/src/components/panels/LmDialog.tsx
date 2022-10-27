import {Button, Dialog, DialogProps, VisuallyHidden} from "tamagui";
import {PropsWithChildren, ReactNode} from "react";
import {X} from "@tamagui/lucide-icons";

type LmDialogProps = PropsWithChildren<DialogProps & {
    trigger?: ReactNode
    title?: string
    description?: string
    isFullscreen?: boolean
    hideCloseButton?: boolean
}>

export function LmDialog({
                             children,
                             trigger,
                             title,
                             description,
                             isFullscreen,
                             hideCloseButton,
                             ...dialogProps
                         }: LmDialogProps) {
    return (
        <Dialog sheetBreakpoint="sm" modal {...dialogProps}>
            {trigger && (
                <Dialog.Trigger asChild>
                    {trigger}
                </Dialog.Trigger>
            )}

            <Dialog.Sheet zIndex={200_000} modal dismissOnSnapToBottom>
                <Dialog.Sheet.Frame padding="$4">
                    <Dialog.SheetContents/>
                </Dialog.Sheet.Frame>
                <Dialog.Sheet.Overlay/>
            </Dialog.Sheet>

            <Dialog.Portal>
                <Dialog.Overlay
                    key="overlay"
                    animation="quick"
                    o={0.5}
                    enterStyle={{o: 0}}
                    exitStyle={{o: 0}}
                />
                <Dialog.Content
                    bordered
                    elevate
                    key="content"
                    animation={[
                        'quick',
                        {
                            opacity: {
                                overshootClamping: true,
                            },
                        },
                    ]}
                    enterStyle={{x: 0, y: -20, opacity: 0, scale: 0.9}}
                    exitStyle={{x: 0, y: 10, opacity: 0, scale: 0.95}}
                    x={0}
                    scale={1}
                    opacity={1}
                    y={0}
                    {...isFullscreen && ({
                        width: '100%',
                        height: '100%'
                    })}
                >

                    {title ? (
                        <Dialog.Title>{title}</Dialog.Title>
                    ) : (
                        <VisuallyHidden>
                            <Dialog.Title></Dialog.Title>
                        </VisuallyHidden>
                    )}

                    {description ? (
                        <Dialog.Description>{description}</Dialog.Description>
                    ) : (
                        <VisuallyHidden>
                            <Dialog.Description/>
                        </VisuallyHidden>
                    )}

                    {children}
                    {!hideCloseButton && (
                        <Dialog.Close asChild>
                            <Button position="absolute" t="$4" r="$4" size="$3" circular chromeless icon={X}/>
                        </Dialog.Close>
                    )}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog>
    )
}