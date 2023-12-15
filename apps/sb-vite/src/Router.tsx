import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './screens/Home.tsx'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
