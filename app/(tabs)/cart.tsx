import React, { useState } from "react";
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRented } from "../RentedContext";

export default function CartScreen() {
  const { rentedItems } = useRented();
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [selectedRenter, setSelectedRenter] = useState<any>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rented Motorcycles</Text>
   <View style={styles.headerRow}>
  <Text style={styles.headerCell}>Image</Text>
  <Text style={styles.headerCell}>Name</Text>
  <Text style={styles.headerCell}>Qty</Text>
  <Text style={styles.headerCell}>Total</Text>
</View>
{rentedItems.length === 0 ? (
  <Text style={styles.empty}>No rentals yet.</Text>
) : (
     
  <ScrollView>
    {rentedItems.map((item, idx) => (
       <TouchableOpacity
         onPress={() => {
  setSelectedRenter(item);
  setInfoModalVisible(true);
}}
        >
      <View key={idx} style={styles.itemRow}>
    
          <Image source={{ uri: item.bike.image }} style={styles.image} />
        <Text style={styles.cell}>{item.bike.name}</Text>
        <Text style={styles.cell}>{item.renterInfo.quantity || 1}</Text>
        <Text style={styles.cell}>
          ₱
          {item.bike.price && item.renterInfo.quantity
            ? (Number(item.bike.price) * Number(item.renterInfo.quantity)).toLocaleString()
            : item.bike.price?.toLocaleString()}
        </Text>
      </View>
                </TouchableOpacity>

    ))}
  </ScrollView>

)}

      {/* Modal to show renter info */}
      <Modal
        visible={infoModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setInfoModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Renter Information</Text>
         {selectedRenter && (
  <>
    <Text style= {styles.text}>First Name: {selectedRenter.renterInfo.firstName}</Text>
    <Text style= {styles.text}>Last Name: {selectedRenter.renterInfo.lastName}</Text>
    <Text style= {styles.text}>Address: {selectedRenter.renterInfo.address}</Text>
    <Text style= {styles.text}>Quantity: {selectedRenter.renterInfo.quantity || 1}</Text>
    <Text style= {styles.text}>
      Total Paid: $
      {selectedRenter.bike.price && selectedRenter.renterInfo.quantity
        ? (Number(selectedRenter.bike.price) * Number(selectedRenter.renterInfo.quantity)).toLocaleString()
        : selectedRenter.bike.price?.toLocaleString()}
    </Text>
  </>
)}
            <TouchableOpacity onPress={() => setInfoModalVisible(false)}>
              <Text style={{ color: 'blue', marginTop: 20 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: "#fff" 
  },
  text:{
    padding: 5,
    borderColor:'black'

  },
  title: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 16,
    marginTop:35,
    textAlign: 'center' 
  },
  headerRow: { 
    flexDirection: "row", 
    marginBottom: 8
   },
  headerCell: { 
    flex: 1, 
    fontWeight: "bold", 
    textAlign: "center" ,
  },
  itemRow: { 
    flexDirection: "row", 
    alignItems: "center",
    marginBottom: 12,
    
   
  },
    
  image: { 
    width: 60, 
    height: 40, 
    borderRadius: 6, 
    marginRight: 8 
  },
  cell: { 
    flex: 1, 
    textAlign: "center" ,
  },
  empty: { 
    textAlign: "center", 
    marginTop: 32, 
    color: "#888" 
  },
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
textAlign:'center'
  },
    
});