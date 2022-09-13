import {ScrollView} from "react-native";
import {PropsWithChildren} from "react";
import {XStack, YStack} from "@my/ui";

type LmAnonymousShellProps = PropsWithChildren<{}>

export function LmAnonymousShell({children}: LmAnonymousShellProps) {
    return (
        <ScrollView>
            <XStack justifyContent={'center'} height={'100%'}>
                <YStack space justifyContent={'center'}>
                    {children}
                </YStack>
            </XStack>
        </ScrollView>
    )
}