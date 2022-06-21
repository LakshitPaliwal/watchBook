import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';

// import { StyleSheet, View } from 'react-native';
// import BottomTabNavigator from './navigation/BottomTabNavigator';

// export default function App() {
//   return (

//     <View style={styles.container}>
//       <StatusBar style="auto" />

//       <NavigationContainer>
//         <BottomTabNavigator />
//       </NavigationContainer>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeCategory/HomeScreen';
import MovieDetailScreen from './screens/MovieDetailScreen/Index';
import TabTwoNavigator from './screens/TabTwoNavigator';
import TabFourNavigator from './screens/TabFourNavigator';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="video" color={color} size={size} />
          ),
          headerShown:false
        }}
      />

      <Tab.Screen
        name="Details"
        component={MovieDetailScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="details" size={24} color={color} />),
        }}
      />

      <Tab.Screen
        name="Upcoming"
        component={TabTwoNavigator}
        options={{
          tabBarLabel: 'Upcoming',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video-library" color={color}size={24} />

          ),
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={TabFourNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" size={24} />),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
      <StatusBar style="auto" />
      <MyTabs />
    </NavigationContainer>
  );
}