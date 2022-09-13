import {LmButton, Sheet, YStack} from '@my/ui'
import {ChevronDown, LogOut} from "@tamagui/feather-icons";
import {useAppState} from "app/src/state/appState";
import {useState} from "react";
import {LmLogoutButton} from "app/src/components/various/LmLogoutButton";

export function LmAppDrawer() {
    const {isMainDrawerOpen, setMainDrawer} = useAppState()
    const [position, setPosition] = useState(0)

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
                        <LmLogoutButton icon={<LogOut/>}
                                        onPress={() => {
                                            setMainDrawer(false)
                                        }}>Logout</LmLogoutButton>
                        <LmButton
                            size="$6"
                            circular
                            icon={ChevronDown}
                            onPress={() => {
                                setMainDrawer(false)
                            }}
                        />
                    </YStack>
                </Sheet.ScrollView>
            </Sheet.Frame>
        </Sheet>
    )
}