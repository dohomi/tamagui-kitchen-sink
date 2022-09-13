import {H1} from "@my/ui";
import {AuthenticatedGuard} from "app/src/components/guards/AuthenticatedGuard";
import {XStack} from "tamagui";
import {LmAppShell} from "app/src/components/layouts/LmAppShell";

export function DashboardScreen() {
    return (
        <AuthenticatedGuard>
            <LmAppShell title={'Dashboard'}>
                <XStack height={'200%'}>
                    <H1>Dashboard content...</H1>
                </XStack>
            </LmAppShell>
        </AuthenticatedGuard>
    )
}