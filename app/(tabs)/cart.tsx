import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useCart } from "../CartContext"; // adjust path if needed

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Shopping Cart</Text>
      {grouped.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        <ScrollView>
          {grouped.map((item:any) => (
            <View key={item.id} style={styles.itemRow}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.itemText}>
                {item.name} x{item.quantity} - ₱{(item.price * item.quantity).toLocaleString()}
              </Text>
            </View>
          ))}
        </ScrollView>
      )}
      <Text style={styles.total}>Total: ₱{total.toLocaleString()}</Text>
    </View>
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
    marginBottom: 10 
},
  image: { 
    width: 40, 
    height: 40, 
    borderRadius: 5, 
    marginRight: 10 
},
  itemText: { 
    color: "black", 
    fontSize: 16 
},
  total: { 
    marginTop: 20, 
    color: "red", 
    fontWeight: "bold", 
    fontSize: 20,
     textAlign: "center" 
    },
});