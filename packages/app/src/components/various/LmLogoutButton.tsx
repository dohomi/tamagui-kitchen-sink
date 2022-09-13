import {LmButton, LmButtonProps} from "@my/ui";
import {useSignOut} from '@nhost/react'

type LmLogoutButtonProps = LmButtonProps

export function LmLogoutButton(props: LmLogoutButtonProps) {
    const {signOut, error} = useSignOut()
    if (error) {
        console.log(error)
    }
    return (
        <LmButton {...props}
                  onPress={async (ev) => {
                      await signOut()
                      if (typeof props.onPress === 'function') {
                          props.onPress(ev)
                      }
                  }}/>
    )
}