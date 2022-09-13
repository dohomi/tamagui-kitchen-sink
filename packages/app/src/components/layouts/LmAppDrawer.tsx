import {Separator, Sheet, YStack} from '@my/ui'
import {LogOut, Sun} from "@tamagui/feather-icons";
import {useAppState} from "app/src/state/appState";
import {useState} from "react";
import {LmLogoutButton} from "app/src/components/various/LmLogoutButton";
import {XStack} from "tamagui";
import {LmThemeToggle} from "app/src/components/various/LmThemeToggle";
import {useAuthenticationStatus} from "@nhost/react";

export function LmAppDrawer() {
    const {isMainDrawerOpen, setMainDrawer} = useAppState()
    const [position, setPosition] = useState(0)
    const {isAuthenticated, isLoading} = useAuthenticationStatus()

    return (
        <Sheet
            modal
            open={isMainDrawerOpen}
            onChangeOpen={setMainDrawer}
            snapPoints={[85, 50, 25]}
            dismissOnSnapToBottom
            position={position}
            onChangePosition={setPosition}
        >
            <Sheet.Overlay/>
            <Sheet.Handle/>
            <Sheet.Frame alignItems="center" justifyContent="center">
                <Sheet.ScrollView>
                    <YStack padding="$4" justifyContent="center" alignItems="center">
                        <XStack marginBottom={'$4'} justifyContent={'space-between'} space>
                            {!isLoading && isAuthenticated && (
                                <LmLogoutButton icon={<LogOut/>}
                                                onPress={() => {
                                                    setMainDrawer(false)
                                                }}>Logout</LmLogoutButton>
                            )}

                            <LmThemeToggle icon={<Sun/>} circular chromeless/>
                        </XStack>
                        <Separator minWidth={'100%'}/>
                    </YStack>
                </Sheet.ScrollView>
            </Sheet.Frame>
        </Sheet>
    )
}