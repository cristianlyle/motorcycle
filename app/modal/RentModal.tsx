import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import API from "../api";
import { useUser } from "../context/UserContext";

interface RentModalProps {
  visible: boolean;
  onClose: () => void;
  onRent: (info: { firstName: string; lastName: string; address: string; quantity: number; days: number }) => void;
  bikeName?: string;
  price?: number;
  navigation?: any;
}
const RentModal: React.FC<RentModalProps> = ({ visible, onClose, onRent, bikeName, price }) => {
  const { user } = useUser(); 
  const [quantity, setQuantity] = useState("");
  const [days, setDays] = useState("");
  const navigation = useNavigation();

  const handleRent = async () => {
    if (!user?.firstName || !user?.lastName || !user?.address || !quantity || !days) {
      Alert.alert("Please fill in all fields");
      return;
    }
    try {
      await API.post("/rented", {
        motorcycleName: bikeName,
        price: Number(price),
        quantity: Number(quantity),
        days: Number(days),
        total: Number(price) * Number(quantity) * Number(days),
        renterInfo: {
          firstName: user.firstName,
          lastName: user.lastName,
          address: user.address,
        },
      });
      Alert.alert("Success", "Motorcycle rented successfully!");
      setQuantity("");
      setDays("");
      onClose();
      (navigation as any).navigate("cart");
    } catch (err: any) {
      Alert.alert("Error", err?.response?.data?.message || err.message);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>Rent Motorcycle</Text>
          {bikeName && <Text style={styles.bikeName}>{bikeName}</Text>}
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={user?.firstName || ""}
            editable={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={user?.lastName || ""}
            editable={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={user?.address || ""}
            editable={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Quantity"
            value={quantity}
            onChangeText={setQuantity}
          />
          <TextInput
            style={styles.input}
            placeholder="Days"
            value={days}
            onChangeText={setDays}
          />
          <TouchableOpacity style={styles.rentButton} onPress={handleRent}>
            <Text style={styles.rentButtonText}>Rent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bikeName: {
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  rentButton: {
    backgroundColor: "#2980b9",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  rentButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: "#888",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default RentModal;