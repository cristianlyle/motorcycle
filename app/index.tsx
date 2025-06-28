import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import API from "./api";
import { useUser } from "./context/UserContext";
const logo1 = require('../assets/images/logo1.png'); // Adjust the path as needed

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setUser } = useUser();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }
    try {
      const res = await API.post("/signin", { email, password });
      Alert.alert("Success", "Sign in successful!");
      setUser(res.data.user);
      router.replace("/home");
    } catch (err: any) {
      Alert.alert("Login Failed", err?.response?.data?.message || err.message);
    }
  };

  return (
     <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={logo1}
          style={{ width: 150, height: 150, resizeMode: 'contain', marginRight: 15 }}
        />
      </View>
      <Text style={styles.title}>ThrottleUp Rental Motors</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
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
      <TouchableOpacity onPress={() => router.replace("/SignUpScreen")}>
        <Text style={{ color: '#2980b9', marginTop: 16 }}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  logo: {
    marginTop: '20%',
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
