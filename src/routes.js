import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/home';
import Profile from './pages/profile';
import Report from './pages/report';


const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='Report' component={Report} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
