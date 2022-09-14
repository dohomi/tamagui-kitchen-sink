import {useRouter} from "next/router";
import {useEffect} from "react";

export function useOnRouteChange(func: () => void) {
    const {asPath} = useRouter() || {}
    useEffect(
        () => {
            let isActive = true
            if (isActive) {
                func()
            }
            return () => {
                isActive = false
            }
        },
        [asPath]
    )
    return null
}
