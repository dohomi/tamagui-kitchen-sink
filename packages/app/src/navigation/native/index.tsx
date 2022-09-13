import React from 'react'

import {HomeScreen} from '../../features/home/HomeScreen'
import {UserDetailScreen} from '../../features/user/detail-screen'
import {OverviewScreen} from "app/src/features/overview/overview";
import {DashboardScreen} from "app/src/features/dashboard/DashboardScreen";
import {RouterNavigationProps} from "app/src/routerConfig";
import {AuthScreen} from "app/src/features/auth/AuthScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useToggleMainDrawer} from "app/src/state/appState";
import {LmButton} from "@my/ui";
import {LmAppDrawer} from "app/src/components/layouts/LmAppDrawer";
import {Settings} from "@tamagui/feather-icons";
import {useAuthenticationStatus} from "@nhost/react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ExerciseEditScreen} from "app/src/features/exercise/ExerciseEditScreen";
import {ExerciseDetailScreen} from "app/src/features/exercise/ExerciseDetailScreen";
import {ExerciseListScreen} from "app/src/features/exercise/ExerciseListScreen";

const AppStack = createBottomTabNavigator<RouterNavigationProps>()

const ExerciseStack = createNativeStackNavigator()

function ExerciseStackNavigation() {
    return (
        <ExerciseStack.Navigator>
            <ExerciseStack.Screen name={'exercise-list'}
                                  component={ExerciseListScreen}/>
            <ExerciseStack.Screen name={'exercise-edit'}
                                  component={ExerciseEditScreen}/>
            <ExerciseStack.Screen name={'exercise-detail'}
                                  component={ExerciseDetailScreen}/>
        </ExerciseStack.Navigator>
    )
}

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
                        title: 'Home'
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
                <AppStack.Screen name={'exerciseStack'}
                                 options={{
                                     headerShown: false
                                 }}
                                 component={ExerciseStackNavigation}
                />
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