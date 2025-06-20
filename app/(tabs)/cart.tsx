import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../CartContext"; // adjust path if needed
import ModalDescription from '../ModalDescription';


export default function CartScreen() {
  const { cart, total } = useCart();

  // Group cart items by id and show quantity
  const grouped = Object.values(
    cart.reduce((acc:any, item:any) => {
      if (!acc[item.id]) {
        acc[item.id] = { ...item, quantity: 1 };
      } else {
        acc[item.id].quantity += 1;
      }
      return acc;
    }, {} as Record<string, { id: string; name: string; price: number; image: string; quantity: number }>)
  );
  const [modalVisible, setModalVisible] = useState(false);
    const [selectedBike, setSelectedBike] = useState<{
      id: string;
      name: string;
      price: number;
      image: string;
      description?: string;
    } | null>(null);


  return (
    <>
    <View style={styles.container}>

      <Text style={styles.title}>🛒 Shopping Cart</Text>
        <View style={styles.headerRow}>
      <Text style={styles.headerCell}>Image</Text>
      <Text style={styles.headerCell}>Name</Text>
      <Text style={styles.headerCell}>Qty</Text>
      <Text style={styles.headerCell}>Price</Text>
    </View>
      {grouped.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        <ScrollView>
          {grouped.map((item:any) => (
            <View key={item.id} style={styles.itemRow}> 
            <TouchableOpacity
                            onPress={() => {
                              setSelectedBike(item);
                              setModalVisible(true);
                            }}
                          >
              <Image source={{ uri: item.image }} style={styles.image} /></TouchableOpacity>
              <Text style={styles.cell}>{item.name}</Text>
          <Text style={styles.cell}>{item.quantity}</Text>
          <Text style={styles.cell}>${item.price * item.quantity}</Text>
        </View>

          ))}
        </ScrollView>
      )}
      <Text style={styles.total}>Total: ₱{total.toLocaleString()}</Text>
    </View> 
    <ModalDescription
  visible={modalVisible}
  bike={selectedBike}
  onClose={() => setModalVisible(false)}
/> 
</>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
},
  title: { 
    fontSize: 24, 
    marginTop: 35,
    color: "red", 
    fontWeight: "bold", 
    marginBottom: 20, 
    textAlign: "center" 
},
  empty: { 
    color: "lightgray", 
    textAlign: "center" 
},
  itemRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    margin: 10 

},
  image: { 
    width: 40, 
    height: 40, 
    borderRadius: 5, 
    marginLeft: 10,
    marginRight: 30 
},
  itemText: { 
    color: "black", 
    fontSize: 16 
},
  total: { 
    color: "black", 
    fontWeight: "bold", 
    fontSize: 16,
    textAlign: "center" 
    },
      headerRow: { 
        flexDirection: 'row', 
        borderBottomWidth: 1, 
        paddingBottom: 4 
      },

      headerCell: { 
        flex: 1, 
        fontWeight: 'bold', 
        textAlign: 'center' 
      },
  cell: { 
    flex: 1, textAlign: 'center' },
  row: { 
    flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-evenly',
      paddingVertical: 8 
    },

});