import {useRouter} from "next/router";
import {useEffect} from "react";

export function useOnRouteChange(func: () => void) {
    const {asPath} = useRouter() || {}
    useEffect(
        () => {
            if (asPath) {
                func()
            }
        },
        [asPath]
    )
    return null
}
