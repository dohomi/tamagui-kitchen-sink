import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {HomeScreen} from '../../features/home/screen'
import {UserDetailScreen} from '../../features/user/detail-screen'
import {OverviewScreen} from "app/features/overview/overview";

const Stack = createNativeStackNavigator<{
    home: undefined
    overview: undefined
    'user-detail': {
        id: string
    }
}>()

export function NativeNavigation() {
    return (
        <Stack.Navigator>
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
        </Stack.Navigator>
    )
}
