import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "skyblue",
      headerStyle: {
        backgroundColor: "rgb(33, 52, 72)",
      },
      headerShadowVisible: false,
      headerTintColor: "white",
      tabBarStyle: {
        backgroundColor: "rgb(33, 52, 72)",
      },
    
    }}
    >
      <Tabs.Screen name="index" options={{
        title: "Home",
        headerTitleAlign: "center",
        tabBarIcon: ({focused,color}) => <Ionicons name={focused ? "home" 
          :"home-outline"} 
          size={24}
           color={color} 
          />,
      }} />
      <Tabs.Screen name="about"options={{
        title: "About",
        headerTitleAlign: "center",
        tabBarIcon: ({focused,color}) => <Ionicons name={focused ? "information-circle" 
          :"information-circle-outline"} 
          size={24}
           color={color} />,
      }} 
      />
      </Tabs>
  );
}