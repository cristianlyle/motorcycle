import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import React from "react";
import { LogBox } from "react-native";
import { CartProvider } from "../CartContext";
import { DarkModeProvider } from "../DarkModeContext";
import { RentedProvider } from '../RentedContext';

import { FavoritesProvider } from '../FavoritesContext';
LogBox.ignoreAllLogs(true); 



export default function TabsLayout() {
    

  return (
               <DarkModeProvider>
<RentedProvider>

    <FavoritesProvider>
    <CartProvider>
    <Tabs
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: "gray", // Active tab color
        tabBarInactiveTintColor: "gray", // Inactive tab color
        
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "gray", 
         paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "speedometer" : "speedometer-outline"} // Motorcycle speedometer icon
              size={24}
              color={color}
            />
          ),  
        }}
      />
      
      <Tabs.Screen
   
        name="favorites"
        options={{
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"} 
              size={24}
              color={color}
            />
          ),
        }}
        
        />
        <Tabs.Screen
        name="cart"
        options={{
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "cart" : "key-outline"} 
              size={24}
              color={color}
            />
          ),
        }}
        />
        <Tabs.Screen
        name="settings"
        options={{
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"} // Motorcycle-related icon
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>     
      </CartProvider>
    </FavoritesProvider>
    </RentedProvider>
       </DarkModeProvider>

  );
}