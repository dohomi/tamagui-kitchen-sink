import { Dispatch, SetStateAction, useState } from 'react'

export type UsePopoverState = {
  open: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
  defaultOpen: boolean
}
export const usePopoverState = (defaultOpen?: boolean): UsePopoverState => {
  const [open, onOpenChange] = useState<boolean>(!!defaultOpen)
  return {
    open,
    onOpenChange,
    defaultOpen: !!defaultOpen,
  }
}
