import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type RootStackParamList = {
  favorites: undefined;
  cart: undefined;
};

export default function Setting() {
  const [darkMode, setDarkMode] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleFavorites = () => {
    navigation.navigate("favorites");
  };

  const handleCart = () => {
    navigation.navigate("cart");
  };

  return (
    <View style={[styles.container]}>
        
      <Text style={[styles.title]}>Settings</Text>
     <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
          style={styles.profileImage}
        />
        <View>
          <Text style={[styles.profileName]}>John Doe</Text>
          <Text style={[styles.profileEmail]}>john.doe@email.com</Text>
        </View>
      </View>
      <TouchableOpacity style={[styles.button]} onPress={handleFavorites} >
        <FontAwesome name="heart" size={24} color="#e74c3c" style={styles.icon} />
        <Text style={[styles.buttonText]}>Favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button]} onPress={handleCart}>
        <Ionicons name="key-outline" size={24} color="#2980b9" style={styles.icon} />
        <Text style={[styles.buttonText]}>Rented Bikes</Text>
      </TouchableOpacity>
<TouchableOpacity
  style={[styles.button, { backgroundColor: "#e74c3c", justifyContent: "center" }]} 
  onPress={() => {
      router.replace("/"); 
  }}
>
  <Ionicons name="log-out-outline" size={24} color="#fff" style={styles.icon} />
  <Text style={[styles.buttonText, { color: "#fff" }]}>Log Out</Text>
</TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 24,
  },
  darkBackground: {
    backgroundColor: "#222",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    color: "#2c2c2c",
  },
  darkText: {
    color: "#fff",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    marginBottom: 18,
    width: "80%",
    justifyContent: "flex-start",
    elevation: 2,
  },
  darkButton:{
            flexDirection: "row",
        backgroundColor: "gray",
    justifyContent: "flex-start",
        alignItems: "center",

  },
  icon: {
    marginRight: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
  },
  switchLabel: {
    fontSize: 16,
    marginHorizontal: 10,
    color: "#2c2c2c",
  },
   profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    alignSelf: "flex-start",
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
    borderWidth: 2,
    borderColor: "#2980b9",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c2c2c",
  },
  profileEmail: {
    fontSize: 14,
    color: "#888",
  },
});