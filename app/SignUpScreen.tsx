import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import API from "./api";
const logo1 = require('../assets/images/logo1.png');

export default function SignUpScreen() {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [address, setAddress] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

const handleSignUp = async () => {
  if (!firstName || !lastName || !address || !email || !password || !confirmPassword) {
    Alert.alert("Error", "Please fill in all fields");
    return;
  }
  if (password !== confirmPassword) {
    Alert.alert("Error", "Passwords do not match");
    return;
  }
  try {
    await API.post("/signup", { firstName, lastName, address, email, password });
    Alert.alert("Success", "Account created! Please sign in.");
    router.replace("/");
  } catch (err: any) {
    Alert.alert("Sign Up Failed", err?.response?.data?.message || err.message);
  }
};


  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={logo1} style={{ width: 150, height: 150, resizeMode: 'contain', marginRight: 15 }} />
      </View>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
  style={styles.input}
  placeholder="First Name"
  value={firstName}
  onChangeText={setFirstName}
  autoCapitalize="words"
/>
<TextInput
  style={styles.input}
  placeholder="Last Name"
  value={lastName}
  onChangeText={setLastName}
  autoCapitalize="words"
/>
<TextInput
  style={styles.input}
  placeholder="Address"
  value={address}
  onChangeText={setAddress}
  autoCapitalize="words"
/>
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace("/")}> 
        <Text style={{ color: '#2980b9', marginTop: 16 }}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
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
