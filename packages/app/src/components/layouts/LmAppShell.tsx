import {YStack} from "tamagui";
import {LmAppBar} from "app/src/components/layouts/LmAppBar";
import {LmDashboardShellProps} from "app/src/components/layouts/layoutTypes";
import {LmAppDrawer} from "app/src/components/layouts/LmAppDrawer";


export function LmAppShell({children, title, rightContent}: LmDashboardShellProps) {
    return (
        <YStack>
            <LmAppDrawer/>
            <LmAppBar title={title} rightContent={rightContent}/>
            {children}
        </YStack>
    )
}