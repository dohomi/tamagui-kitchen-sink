import {ScrollView} from "react-native";
import {LmDashboardShellProps} from "app/src/components/layouts/layoutTypes";


export function LmAppShell({children}: LmDashboardShellProps) {
    return (
        <ScrollView>
            {children}
        </ScrollView>
    )
}