import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import DetailScreen from './screens/DetailScreen';
import DetailsScreen from './screens/DetailsScreen';
import PerwakilanScreen from './screens/perwakilanScreen';
import PergantianScreen from './screens/PergantianScreen';
import PenyerahanScreen from './screens/PenyerahanScreen';
import RiwayatScreen from './screens/RiwayatScreen';


const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreAllLogs(true);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perwakilan"
          component={PerwakilanScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pergantian"
          component={PergantianScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Penyerahan"
          component={PenyerahanScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Riwayat"
          component={RiwayatScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
