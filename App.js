import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store';  

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen'; 
import StudentScreen from './src/screens/StudentScreen'; 

const Stack = createStackNavigator();

const App = () => {
    return (
      <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                    <Stack.Screen name="Student" component={StudentScreen} />
                </Stack.Navigator>
            </NavigationContainer>
      </Provider>
    );
};

export default App;
