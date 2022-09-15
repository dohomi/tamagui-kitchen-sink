import React from 'react'

import {HomeScreen} from '../../features/home/HomeScreen'
import {UserDetailScreen} from '../../features/user/detail-screen'
import {OverviewScreen} from "app/src/features/overview/overview";
import {DashboardScreen} from "app/src/features/dashboard/DashboardScreen";
import {RouterNavigationProps} from "app/src/navigation/routerConfig";
import {AuthScreen} from "app/src/features/auth/AuthScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useToggleMainDrawer} from "app/src/state/appState";
import {LmButton} from "@my/ui";
import {LmAppDrawer} from "app/src/components/layouts/LmAppDrawer";
import {Settings} from "@tamagui/feather-icons";
import {useAuthenticationStatus} from "@nhost/react";
import {ExerciseEditScreen} from "app/src/features/exercise/ExerciseEditScreen";
import {ExerciseDetailScreen} from "app/src/features/exercise/ExerciseDetailScreen";
import {ExerciseListScreen} from "app/src/features/exercise/ExerciseListScreen";
import i18n from "app/src/i18n/i18n";

const AppStack = createBottomTabNavigator<RouterNavigationProps>()

export function NativeNavigation() {
    const toggleMainDrawer = useToggleMainDrawer()
    const {isAuthenticated} = useAuthenticationStatus()
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
                    name="user-detail"
                    component={UserDetailScreen}
                    options={{
                        tabBarButton: () => null,
                        title: 'User',
                    }}
                />
                <AppStack.Screen name={'dashboard'}
                                 component={DashboardScreen}
                                 options={{
                                     title: 'Dashboard',
                                     ...(!isAuthenticated && {
                                         tabBarButton: () => null
                                     })
                                 }}
                />
                <AppStack.Screen name={'auth'}
                                 component={AuthScreen}
                                 options={{
                                     title: 'Login',
                                     ...(isAuthenticated && {
                                         tabBarButton: () => null
                                     })
                                 }}
                />

                <AppStack.Group screenOptions={{
                    tabBarButton: () => null
                }}>
                    <AppStack.Screen name={'exercises'}
                                     component={ExerciseListScreen}/>
                    <AppStack.Screen name={'exercise-edit'}
                                     component={ExerciseEditScreen}/>
                    <AppStack.Screen name={'exercise-new'}
                                     component={ExerciseEditScreen}/>
                    <AppStack.Screen name={'exercise'}
                                     options={({navigation}) => ({
                                         headerLeft: props => {
                                             if (navigation.canGoBack()) {
                                                 return <LmButton
                                                     onPress={() => navigation.goBack()}>test</LmButton>
                                             }
                                             return null
                                         }
                                     })}
                                     component={ExerciseDetailScreen}/>
                </AppStack.Group>

                <AppStack.Screen name={'settings'}
                                 component={() => null}
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