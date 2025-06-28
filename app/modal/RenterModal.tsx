import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface RenterModalProps {
  visible: boolean;
  renter: any;
  onClose: () => void;
  onRetrieve: () => void;
}

const RenterModal: React.FC<RenterModalProps> = ({ visible, renter, onClose,onRetrieve }) => (
  <Modal
    visible={visible}
    transparent
    animationType="slide"
    onRequestClose={onClose}
  >
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Renter Information</Text>
        {renter && (
          <>
            <Text style={styles.text}>First Name: {renter.renterInfo.firstName}</Text>
            <Text style={styles.text}>Last Name: {renter.renterInfo.lastName}</Text>
            <Text style={styles.text}>Address: {renter.renterInfo.address}</Text>
            <Text style={styles.text}>Quantity: {renter.renterInfo.quantity || 1}</Text>
            <Text style={styles.text}>Day of Rent: {renter.renterInfo.days || 1}</Text>
            <Text style={styles.text}>
  {`Total Paid: $${renter.bike.price && renter.renterInfo.quantity
    ? (
        Number(renter.bike.price) *
        Number(renter.renterInfo.quantity) *
        Number(renter.renterInfo.days)
      ).toLocaleString()
    : renter.bike.price?.toLocaleString()}`}
</Text>
          </>
        )}
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
          <TouchableOpacity onPress={onClose} style={{ backgroundColor: '#2c2c2c',padding:10,borderRadius:10}}>
            <Text style={{ color: "white", textAlign: "center" }}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onRetrieve} style={{backgroundColor: 'red',padding:10 ,borderRadius:10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Retrieve</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 280,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  text: {
    padding: 5,
    borderColor: "black",
  },
});

export default RenterModal;