import {PropsWithChildren} from "react";
import {useAuthenticationStatus} from "@nhost/react";
import {Spinner, useIsomorphicLayoutEffect} from "@my/ui";
import {useRouter} from "solito/router";

type AuthenticatedGuardProps = PropsWithChildren

export function AnonymousGuard({children}: AuthenticatedGuardProps) {
    const {isAuthenticated, isLoading} = useAuthenticationStatus()
    const {push} = useRouter()

    useIsomorphicLayoutEffect(
        () => {
            if (!isLoading && isAuthenticated) {
                push('/dashboard')
            }
        }, [isAuthenticated, isLoading]
    )

    if (isLoading) {
        return <><Spinner/> please wait...</>
    }

    return (
        <>{children}</>
    )
}