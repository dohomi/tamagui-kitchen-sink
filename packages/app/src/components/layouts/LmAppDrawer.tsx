import {Button, Separator, Sheet, YStack} from 'tamagui-extras'
import {Sun} from "@tamagui/lucide-icons";
import {useAppState} from "app/src/state/appState";
import {useState} from "react";
import {XStack} from "tamagui";
import {LmThemeToggle} from "app/src/components/various/LmThemeToggle";
import {useOnRouteChange} from "app/src/navigation/useOnRouteChange";

export function LmAppDrawer() {
    const {isMainDrawerOpen, setMainDrawer} = useAppState()
    const [position, setPosition] = useState(0)
    useOnRouteChange(
        () =>
            setMainDrawer(false)
    )

    return (
        <>
            <Sheet
                modal
                open={isMainDrawerOpen}
                onOpenChange={setMainDrawer}
                snapPoints={[85, 50, 25]}
                dismissOnSnapToBottom
                position={position}
                onPositionChange={setPosition}
            >
                <Sheet.Overlay/>
                <Sheet.Handle/>

                <Sheet.Frame alignItems="center" justifyContent="center">
                    <Sheet.ScrollView>
                        <YStack padding="$4" justifyContent="center" alignItems="center">
                            <XStack marginBottom={'$4'} justifyContent={'space-between'} space>
                                <LmThemeToggle icon={<Sun/>} circular chromeless/>
                            </XStack>
                            <Separator minWidth={'100%'} marginBottom={'$4'}/>
                            <Button onPress={() => setMainDrawer(false)}>Close</Button>
                        </YStack>
                    </Sheet.ScrollView>
                </Sheet.Frame>
            </Sheet>
        </>
    )
}