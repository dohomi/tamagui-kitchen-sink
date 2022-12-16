import {useNavigationState} from '@react-navigation/native';
import {useEffect} from "react";

export function useOnRouteChange(func: () => void) {
    const routeIndex = useNavigationState(state => state?.index);
    useEffect(
        () => {
            if (Number.isInteger(routeIndex)) {
                func()
            }
        },
        [routeIndex]
    )

    return null
}
