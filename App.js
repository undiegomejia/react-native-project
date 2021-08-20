import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { DateState } from "./context/DateState";

import { Home } from "./components/Home";
import { Schedule } from "./components/Schedule";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <DateState>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            inactiveColor="#F6F2ED"
            barStyle={{ backgroundColor: "#A35F6F" }}
          >
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
            />
            <Tab.Screen 
            name="Calendario" 
            component={Schedule} 
            options={{
              tabBarLabel: 'Calendario',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="calendar" color={color} size={26} />
              ),
            }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </DateState>
    </>
  );
}
