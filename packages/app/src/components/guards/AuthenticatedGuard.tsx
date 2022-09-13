import {PropsWithChildren} from "react";
import {useAuthenticationStatus} from "@nhost/react";
import {Spinner, useIsomorphicLayoutEffect} from "@my/ui";
import {useRouter} from "solito/router";
import {Text, YStack} from "tamagui";

type AuthenticatedGuardProps = PropsWithChildren

export function AuthenticatedGuard({children}: AuthenticatedGuardProps) {
    const {isAuthenticated, isLoading} = useAuthenticationStatus()
    const {push} = useRouter()

    useIsomorphicLayoutEffect(
        () => {
            if (!process.env.STORYBOOK && !isLoading && !isAuthenticated) {
                push('/auth')
            }
        }, [isAuthenticated, isLoading]
    )

    if (isLoading) {
        return <><Spinner/> please wait...</>
    }

    if (!isAuthenticated && !process.env.STORYBOOK) {
        return (
            <YStack>
                <Text>not authenticated...</Text>
            </YStack>
        )
    }

    return (
        <>{children}</>
    )
}