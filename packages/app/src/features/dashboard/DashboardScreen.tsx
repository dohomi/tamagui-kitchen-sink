import {ScrollView} from "react-native";
import {H1} from "@my/ui";
import {AuthenticatedGuard} from "app/src/components/guards/AuthenticatedGuard";

export function DashboardScreen() {
    return (
        <AuthenticatedGuard>
            <ScrollView>
                <H1>Dashboard</H1>
            </ScrollView>
        </AuthenticatedGuard>
    )
}