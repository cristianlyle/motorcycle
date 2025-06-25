import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
const logo1 = require('../assets/images/logo1.png'); // Adjust the path as needed

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Simple check, replace with real auth if needed
    if (username && password) {
    if (username === "admin") {
      router.replace("./admin");
    } else {
      router.replace("./home");
    }
  } else {
    Alert.alert("Error", "Please enter username and password");
  }
  };

  return (
    <View style={styles.container}>

        <View style= {styles.logo}>
          <View>
        <Image
        source={logo1}
        style = {{width:150,height:150, resizeMode: 'contain',marginRight:15
}}
      />
      </View>
 
      </View>
      <Text style={styles.title}>ThrottleUp Rental Motors</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#fff" 
  },
  logo:{
    flexDirection:'row',
    marginTop: 35,
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 32 
  },
  input: {
    width: 250,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#2980b9",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: { 
    color: "#fff", 
    fontWeight: "bold", 
    fontSize: 16 
  },
});