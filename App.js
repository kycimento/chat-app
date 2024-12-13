import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';  // Caminho para sua tela Home
import RenanChatScreen from './src/screens/RenanChatScreen';  // Caminho para sua tela RenanChat
import PaixaoChatScreen from './src/screens/PaixaoChatScreen';  // Caminho para sua tela PaixaoChat

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RenanChat" component={RenanChatScreen} />
        <Stack.Screen name="PaixaoChat" component={PaixaoChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
