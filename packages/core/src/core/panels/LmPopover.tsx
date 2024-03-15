import { useControllableState } from 'tamagui'
import { ReactNode } from 'react'
import { LmSheet, LmSheetProps } from './LmSheet'
import { Popover, PopoverContentProps, PopoverProps } from './PopoverNew'

export type LmPopoverProps = PopoverProps & {
  trigger?: ReactNode
  hideArrow?: boolean
  contentProps?: Omit<PopoverContentProps, 'ref'>
  isBouncy?: boolean
  sheetProps?: LmSheetProps
}

export function LmPopover({
  trigger,
  children,
  hideArrow,
  contentProps,
  isBouncy = true,
  sheetProps,
  ...popoverProps
}: LmPopoverProps) {
  const { onOpenChange, open, defaultOpen, ...rest } = popoverProps
  const [currentOpen, setOpen] = useControllableState({
    onChange: onOpenChange,
    defaultProp: defaultOpen,
    prop: open,
  })
  // console.log({ open, currentOpen })
  return (
    <Popover size="$5" {...rest} open={currentOpen} onOpenChange={setOpen}>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>
      {/*{currentOpen && (*/}
      <Popover.Adapt when={'sm'} platform="touch">
        <LmSheet {...sheetProps}>
          <Popover.Adapt.Contents />
        </LmSheet>
      </Popover.Adapt>
      {/*)}*/}
      {/*{currentOpen && (*/}
      <Popover.Content
        borderWidth={1}
        borderColor="$borderColor"
        {...(isBouncy && {
          enterStyle: { x: 0, y: -10, opacity: 0 },
          exitStyle: { x: 0, y: -10, opacity: 0, pointerEvents: 'none' },
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
        setIsFullyHidden={contentProps?.setIsFullyHidden as PopoverContentProps['setIsFullyHidden']}
      >
        {!hideArrow && <Popover.Arrow borderWidth={1} borderColor="$borderColor" />}
        {children}
      </Popover.Content>
      {/*)}*/}
    </Popover>
  )
}
