import React from 'react';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TabTwoNavigator from '../screens/TabTwoNavigator';
import TabThreeNavigator from '../screens/TabThreeNavigator';
import TabFourNavigator from '../screens/TabFourNavigator';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'; 

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Coming_Soon"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={TabThreeNavigator}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Downloads"
                component={TabFourNavigator}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name="download" size={24} color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

export default BottomTabNavigator;

