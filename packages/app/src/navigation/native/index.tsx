import React from 'react'
import {HomeScreen} from '../../features/home/HomeScreen'
import {OverviewScreen} from "app/src/features/overview/overview";
import {RouterNavigationProps} from "app/src/navigation/routerConfig";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useToggleMainDrawer} from "app/src/state/appState";
import {LmButton} from "tamagui-extras";
import {LmAppDrawer} from "app/src/components/layouts/LmAppDrawer";
import {Settings} from "@tamagui/lucide-icons";
import i18n from "app/src/i18n/i18n";
import {PlaygroundScreen} from "app/src/features/playground/playground";

const AppStack = createBottomTabNavigator<RouterNavigationProps>()
const SettingsScreen = () => null;

export function NativeNavigation() {
    const toggleMainDrawer = useToggleMainDrawer()
    return (
        <>
            <AppStack.Navigator>
                <AppStack.Screen
                    name="home"
                    component={HomeScreen}
                    options={{
                        tabBarButton: () => null,
                        title: i18n.t('welcome')
                    }}
                />
                <AppStack.Screen
                    name="overview"
                    component={OverviewScreen}
                    options={{
                        title: 'Overview',
                    }}
                />
                <AppStack.Screen
                    name="playground"
                    component={PlaygroundScreen}
                    options={{
                        title: 'Playground',
                    }}
                />


                <AppStack.Screen name={'settings'}
                                 component={SettingsScreen}
                                 options={{
                                     tabBarButton: () => (
                                         <LmButton
                                             chromeless
                                             circular
                                             marginRight={'$2'}
                                             size={'$5'}
                                             onPress={() => {
                                                 toggleMainDrawer()
                                             }} icon={<Settings/>}/>
                                     )
                                 }}
                />
            </AppStack.Navigator>
            <LmAppDrawer/>
        </>
    )
}

NativeNavigation.displayName = 'NativeNavigation'