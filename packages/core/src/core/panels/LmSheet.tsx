import { Sheet } from 'tamagui'
import { PropsWithChildren, useState } from 'react'
import { SheetProps } from '@tamagui/sheet/src/types'

export type LmSheetProps = PropsWithChildren<
  SheetProps & {
    hideHandle?: boolean
    fullScreen?: boolean
    enableScroll?: boolean
    scrollviewProps?: typeof Sheet.ScrollView
  }
>

export function LmSheet({
  hideHandle,
  children,
  fullScreen,
  snapPoints = [85, 50, 25],
  enableScroll,
  scrollviewProps,
  ...sheetProps
}: LmSheetProps) {
  const [position, setPosition] = useState(0)
  return (
    <Sheet
      modal
      dismissOnSnapToBottom
      {...sheetProps}
      snapPoints={fullScreen ? [100, 0] : snapPoints}
      disableDrag={fullScreen ? true : sheetProps.disableDrag}
      position={position}
      onPositionChange={setPosition}
    >
      {!fullScreen && <Sheet.Overlay />}
      {!hideHandle && !fullScreen && <Sheet.Handle />}
      <Sheet.Frame flex={1} padding={'$4'} borderRadius={fullScreen ? 0 : undefined}>
        {enableScroll ? (
          <Sheet.ScrollView {...scrollviewProps}>{children}</Sheet.ScrollView>
        ) : (
          <>{children}</>
        )}
      </Sheet.Frame>
    </Sheet>
  )
}
