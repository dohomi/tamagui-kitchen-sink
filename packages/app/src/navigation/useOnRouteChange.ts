import {useNavigationState} from '@react-navigation/native';
import {useEffect} from "react";

export function useOnRouteChange(func: () => void) {
    const routeIndex = useNavigationState(state => state?.index);
    useEffect(
        () => {
            let isActive = true
            if (Number.isInteger(routeIndex) && isActive) {
                func()
            }
            return () => {
                isActive = false
            }
        },
        [routeIndex]
    )

    return null
}
