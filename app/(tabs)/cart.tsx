import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRented } from "../context/RentedContext";
import RenterModal from "../modal/RenterModal";

export default function CartScreen() {
  const { rentedItems,setRentedItems } = useRented();
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [selectedRenter, setSelectedRenter] = useState<any>(null);

  const handleRetrieve = () => {
  if (selectedRenter) {
    setRentedItems(items => items.filter(item => item !== selectedRenter));
    setInfoModalVisible(false);
    setSelectedRenter(null);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rented Motorcycles</Text>
   <View style={styles.headerRow}>
  <Text style={styles.headerCell}>Image</Text>
  <Text style={styles.headerCell}>Name</Text>
  <Text style={styles.headerCell}>Qty</Text>
    <Text style={styles.headerCell}>Days</Text>
  <Text style={styles.headerCell}>Total</Text>
</View>
{rentedItems.length === 0 ? (
  <Text style={styles.empty}>No rentals yet.</Text>
) : (
     
  <ScrollView>
  {rentedItems.map((item: any, idx) => (
  <TouchableOpacity
    key={item.bike?.id ? item.bike.id + '-' + idx : idx}
    onPress={() => {
      setSelectedRenter(item);
      setInfoModalVisible(true);
    }}
        >
    <View style={styles.itemRow}>
    
          <Image source={{ uri: item.bike.image }} style={styles.image} />
        <Text style={styles.cell}>{item.bike.name}</Text>
        <Text style={styles.cell}>{item.renterInfo.quantity || 1}</Text>
            <Text style={styles.cell}>{item.renterInfo.days || 1}</Text>

       <Text style={styles.cell}>
  {`$${item.bike.price && item.renterInfo.quantity
    ? (Number(item.bike.price) * Number(item.renterInfo.quantity) * Number(item.renterInfo.days)).toLocaleString()
    : item.bike.price?.toLocaleString()}`}
</Text>
      </View>
            </TouchableOpacity>

    ))}
  </ScrollView>

)}
     
<RenterModal
  visible={infoModalVisible}
  renter={selectedRenter}
  onClose={() => setInfoModalVisible(false)}
    onRetrieve={handleRetrieve}

/>
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