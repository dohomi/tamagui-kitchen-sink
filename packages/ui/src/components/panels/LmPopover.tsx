import { Popover, PopoverContentProps, PopoverProps } from 'tamagui'
import { PropsWithChildren, ReactNode } from 'react'

export type LmPopoverProps = PropsWithChildren<{
  trigger?: ReactNode
  hideArrow?: boolean
  popoverProps?: PopoverProps
  contentProps?: PopoverContentProps
  isBouncy?: boolean
}>

export function LmPopover({
  trigger,
  children,
  hideArrow,
  popoverProps,
  contentProps,
  isBouncy = true,
}: LmPopoverProps) {
  // const isReady = useDidFinishSSR()

  return (
    <Popover size="$5" {...popoverProps}>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>

      <Popover.Adapt when="sm" platform="touch">
        <Popover.Sheet modal dismissOnSnapToBottom>
          <Popover.Sheet.Frame padding={'$4'}>
            <Popover.Sheet.ScrollView>
              <Popover.Adapt.Contents />
            </Popover.Sheet.ScrollView>
          </Popover.Sheet.Frame>
          <Popover.Sheet.Overlay />
        </Popover.Sheet>
      </Popover.Adapt>

      <Popover.Content
        bw={1}
        boc="$borderColor"
        {...(isBouncy && {
          enterStyle: { x: 0, y: -10, opacity: 0 },
          exitStyle: { x: 0, y: -10, opacity: 0 },
          x: 0,
          y: 0,
          o: 1,
          animation: [
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ],
        })}
        elevate
        padding={contentProps?.padding || 0}
        {...contentProps}
      >
        {!hideArrow && <Popover.Arrow bw={1} boc="$borderColor" />}
        {children}
      </Popover.Content>
    </Popover>
  )
  // : null
}
