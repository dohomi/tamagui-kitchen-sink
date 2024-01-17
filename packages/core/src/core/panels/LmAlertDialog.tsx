import { ReactNode } from 'react'
import {
  AlertDialog,
  AlertDialogContentProps,
  AlertDialogDescriptionProps,
  AlertDialogProps,
  AlertDialogTitleProps,
  XStack,
  XStackProps,
  YStack,
} from 'tamagui'

export type LmAlertDialogProps = AlertDialogProps & {
  dialogContentProps?: AlertDialogContentProps
  trigger?: ReactNode
  cancelButton?: ReactNode
  actionButton?: ReactNode
  contentStackProps?: XStackProps
  actionStackProps?: XStackProps
  title: string
  titleProps?: AlertDialogTitleProps
  description: string
  descriptionProps?: AlertDialogDescriptionProps
}

export function LmAlertDialog({
  trigger,
  cancelButton,
  actionButton,
  actionStackProps,
  titleProps,
  descriptionProps,
  title,
  description,
  contentStackProps,
  dialogContentProps,
  ...dialogProps
}: LmAlertDialogProps) {
  return (
    <AlertDialog native {...dialogProps}>
      {trigger && <AlertDialog.Trigger asChild>{trigger}</AlertDialog.Trigger>}

      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <AlertDialog.Content
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
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
          {...dialogContentProps}
        >
          <YStack space {...contentStackProps}>
            <AlertDialog.Title {...titleProps}>{title}</AlertDialog.Title>
            <AlertDialog.Description {...descriptionProps}>{description}</AlertDialog.Description>

            <XStack space="$3" justifyContent="flex-end" {...actionStackProps}>
              {cancelButton && <AlertDialog.Cancel asChild>{cancelButton}</AlertDialog.Cancel>}
              {actionButton && <AlertDialog.Action asChild>{actionButton}</AlertDialog.Action>}
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  )
}
