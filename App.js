import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login/Login';
import Sign from './src/pages/Sign/Sign';
import FlashMessage from 'react-native-flash-message'
import Rooms from './src/pages/Rooms/Rooms';
import colors from './styles/colors';
import Loby from './src/pages/Loby/Loby';




const Stack = createStackNavigator();

function App() {

  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Sign' component={Sign} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }

  const ContentStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Rooms' component={Rooms} options={{ headerShown: false }} />
        <Stack.Screen name='Loby' component={Loby} options={{ headerTintColor: colors.oranged, headerBackTitleStyle: { color: colors.oranged }, headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='AuthStack' component={AuthStack} options={{ headerShown: false }} />
        <Stack.Screen name='ContentStack' component={ContentStack} options={{ headerShown: false }} />
      </Stack.Navigator>
      <FlashMessage position={'top'} />
    </NavigationContainer>
  )
}

export default App;