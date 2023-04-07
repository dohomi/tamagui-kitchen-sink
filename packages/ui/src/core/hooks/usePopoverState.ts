import {useState} from "react";

export const usePopoverState = (defaultOpen?: boolean) => {
    const [open, onOpenChange] = useState<boolean>(false)
    return {
        open, onOpenChange, defaultOpen: !!defaultOpen
    }
}