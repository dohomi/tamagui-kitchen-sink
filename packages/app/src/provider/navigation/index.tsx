import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native'
import * as Linking from 'expo-linking'
import {PropsWithChildren, useEffect, useMemo} from 'react'
import {useThemeState} from "app/src/state/themeState";
import {useColorScheme} from 'react-native'
import {nativeScreens} from "app/src/navigation/routerConfig";

export function NavigationProvider({
                                       children,
                                   }: PropsWithChildren) {
    const theme = useColorScheme()
    const {name, changeTheme} = useThemeState()
    useEffect(() => {
        if (theme) {
            changeTheme(theme)
        }
    }, [theme])

    return (
        <NavigationContainer
            theme={name === 'dark' ? DarkTheme : DefaultTheme}
            linking={useMemo(
                () => ({
                    prefixes: [Linking.createURL('/')],
                    config: {
                        initialRouteName: 'home',
                        screens: nativeScreens,
                    },
                }),
                []
            )}
        >
            {children}
        </NavigationContainer>
    )
}
