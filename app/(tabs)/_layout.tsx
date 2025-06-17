import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { LogBox } from "react-native";
import { CartProvider } from "../CartContext";


LogBox.ignoreAllLogs(true); 


export default function TabsLayout() {
  return (
    <CartProvider>
    <Tabs
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: "red", // Active tab color
        tabBarInactiveTintColor: "gray", // Inactive tab color
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "gray", // Tab bar border
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
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
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "bicycle" : "bicycle-outline"} // Motorcycle-related icon
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
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
          title: "Carts",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"} 
              size={24}
              color={color}
            />
          ),
        }}
        />
    </Tabs>
      </CartProvider>
  );
}