import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DetailScreen from '../screens/DetailScreen';
import PerwakilanScreen from '../screens/perwakilanScreen';

const Stack = createStackNavigator();

function AppNavigator() {
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
                <Stack.Screen name="Dashboard"
                    component={DashboardScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen name="Detail"
                    component={DetailScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen name="Details"
                    component={DetailsScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen name="Perwakilan"
                    component={PerwakilanScreen}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
