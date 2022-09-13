import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {HomeScreen} from '../../features/home/HomeScreen'
import {UserDetailScreen} from '../../features/user/detail-screen'
import {OverviewScreen} from "app/src/features/overview/overview";
import {DashboardScreen} from "app/src/features/dashboard/DashboardScreen";
import {RouterNavigationProps} from "app/src/routerConfig";
import {AuthScreen} from "app/src/features/auth/AuthScreen";

const Stack = createNativeStackNavigator<RouterNavigationProps>()

export function NativeNavigation() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{
                    title: 'Home'
                }}
            />
            <Stack.Screen
                name="overview"
                component={OverviewScreen}
                options={{
                    title: 'Overview',
                }}
            />
            <Stack.Screen
                name="user-detail"
                component={UserDetailScreen}
                options={{
                    title: 'User',
                }}
            />
            <Stack.Screen name={'dashboard'}
                          component={DashboardScreen}
                          options={{
                              title: 'Dashboard'
                          }}
            />
            <Stack.Screen name={'auth'}
                          component={AuthScreen}
                          options={{
                              title: 'Login'
                          }}
            />
        </Stack.Navigator>
    )
}

NativeNavigation.displayName = 'NativeNavigation'