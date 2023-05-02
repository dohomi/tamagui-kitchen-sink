import {
  Button,
  Dialog,
  DialogContentProps,
  DialogProps,
  SizeTokens,
  VisuallyHidden,
  XStack,
} from 'tamagui'
import { ReactNode } from 'react'
import { XRegular } from '../content/icons'
import { useWindowDimensions } from 'react-native'
import { LmDialogActions, LmDialogHeader } from './LmDialogActions'
import { LmDialogContent } from './LmDialogContent'

export type LmDialogProps = DialogProps & {
  trigger?: ReactNode
  title?: string
  description?: string
  hideCloseButton?: boolean
  fullScreen?: boolean
  contentPadding?: SizeTokens
  dialogHeight?: string | number
  dialogWidth?: string | number
  dialogContentProps?: DialogContentProps
  preventClickOutside?: boolean
}

export function LmDialog({
  children,
  trigger,
  title,
  description,
  hideCloseButton,
  fullScreen,
  contentPadding = '$4',
  dialogWidth,
  dialogHeight,
  dialogContentProps,
  preventClickOutside,
  ...dialogProps
}: LmDialogProps) {
  const { width, height } = useWindowDimensions()
  return (
    <Dialog modal {...dialogProps}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Adapt when="sm" platform="touch">
        <Dialog.Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Dialog.Sheet.Frame padding="$10">
            <Dialog.Adapt.Contents />
          </Dialog.Sheet.Frame>
          <Dialog.Sheet.Overlay />
        </Dialog.Sheet>
      </Dialog.Adapt>
      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Dialog.Content
          key="content"
          padding={'$0'}
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
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
          {...(fullScreen
            ? {
                width,
                height,
              }
            : {
                maxHeight: '90%',
                maxWidth: '90%',
                width: dialogWidth,
                height: dialogHeight,
              })}
          {...(preventClickOutside && {
            onEscapeKeyDown: (ev) => {
              ev.preventDefault()
            },
            onInteractOutside: (ev) => {
              ev.preventDefault()
            },
          })}
          {...dialogContentProps}
        >
          {(!hideCloseButton || title) && (
            <XStack
              space
              justifyContent={'space-between'}
              paddingRight={contentPadding}
              paddingLeft={contentPadding}
              paddingTop={contentPadding}
            >
              {title ? (
                <Dialog.Title>{title}</Dialog.Title>
              ) : (
                <VisuallyHidden>
                  <Dialog.Title></Dialog.Title>
                </VisuallyHidden>
              )}
              {!hideCloseButton && (
                <Dialog.Close asChild>
                  <Button size="$3" circular icon={<XRegular />} />
                </Dialog.Close>
              )}
            </XStack>
          )}

          {description ? (
            <Dialog.Description
              paddingTop={contentPadding}
              paddingRight={contentPadding}
              paddingLeft={contentPadding}
            >
              {description}
            </Dialog.Description>
          ) : (
            <VisuallyHidden>
              <Dialog.Description />
            </VisuallyHidden>
          )}
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}

LmDialog.Actions = LmDialogActions
LmDialog.Content = LmDialogContent
LmDialog.Header = LmDialogHeader
