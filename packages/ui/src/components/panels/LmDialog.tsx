import {Button, Dialog, DialogProps, VisuallyHidden, XStack} from "tamagui";
import {PropsWithChildren, ReactNode} from "react";
import {X} from "@tamagui/lucide-icons";

type LmDialogProps = PropsWithChildren<DialogProps & {
    trigger?: ReactNode
    title?: string
    description?: string
    hideCloseButton?: boolean
}>

export function LmDialog({
                             children,
                             trigger,
                             title,
                             description,
                             hideCloseButton,
                             ...dialogProps
                         }: LmDialogProps) {
    return (
        <Dialog modal {...dialogProps}>
            {trigger && (
                <Dialog.Trigger asChild>
                    {trigger}
                </Dialog.Trigger>
            )}
            <Dialog.Adapt when="sm">
                <Dialog.Sheet zIndex={200_000} modal dismissOnSnapToBottom>
                    <Dialog.Sheet.Frame padding="$4">
                        <Dialog.Adapt.Contents />
                    </Dialog.Sheet.Frame>
                    <Dialog.Sheet.Overlay/>
                </Dialog.Sheet>
            </Dialog.Adapt>
            <Dialog.Portal>
                <Dialog.Overlay
                    key="overlay"
                    animation="quick"
                    opacity={0.5}
                    enterStyle={{opacity: 0}}
                    exitStyle={{opacity: 0}}
                />
                <Dialog.Content
                    key="content"
                    bordered
                    elevate
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
                >
                    <XStack space justifyContent={'space-between'}>
                        {title ? (
                            <Dialog.Title>{title}</Dialog.Title>
                        ) : (
                            <VisuallyHidden>
                                <Dialog.Title></Dialog.Title>
                            </VisuallyHidden>
                        )}
                        {!hideCloseButton && (
                            <Dialog.Close asChild>
                                <Button size="$3" circular chromeless icon={X}/>
                            </Dialog.Close>
                        )}
                    </XStack>

                    {description ? (
                        <Dialog.Description>{description}</Dialog.Description>
                    ) : (
                        <VisuallyHidden>
                            <Dialog.Description/>
                        </VisuallyHidden>
                    )}

                    {children}

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog>
    )
}