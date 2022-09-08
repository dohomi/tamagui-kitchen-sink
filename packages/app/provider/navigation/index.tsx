import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native'
import * as Linking from 'expo-linking'
import {ReactNode, useEffect, useMemo} from 'react'
import {useThemeState} from "app/components/state/themeState";
import {useColorScheme} from 'react-native'

export function NavigationProvider({
                                       children,
                                   }: {
    children: ReactNode
}) {
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
                        screens: {
                            home: '',
                            'user-detail': 'user/:id',
                            overview: 'overview'
                        },
                    },
                }),
                []
            )}
        >
            {children}
        </NavigationContainer>
    )
}
