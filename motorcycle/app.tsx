import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [cart, setCart] = useState<{ id: string; name: string; price: number }[]>([]);
  const [total, setTotal] = useState(0);

  const motorcycles = [
    { id: '1', name: 'Yamaha Mio Sporty', price: 65000 },
    { id: '2', name: 'Honda Click 125i', price: 78000 },
    { id: '3', name: 'Kawasaki Barako II', price: 88000 },
  ];

  const addToCart = (item: { id: string; name: string; price: number }) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Online Motorcycle Shop</Text>

        {motorcycles.map((bike) => (
          <View key={bike.id} style={styles.card}>
            <Text style={styles.name}>{bike.name}</Text>
            <Text>Price: ₱{bike.price.toLocaleString()}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(bike)} />
          </View>
        ))}

        <View style={styles.cart}>
          <Text style={styles.cartTitle}>Shopping Cart</Text>
          {cart.length === 0 ? (
            <Text>Your cart is empty.</Text>
          ) : (
            cart.map((item, index) => (
              <Text key={index}>• {item.name} - ₱{item.price.toLocaleString()}</Text>
            ))
          )}
          <Text style={styles.total}>Total: ₱{total.toLocaleString()}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'darkred',
    textAlign: 'center',
  },
  card: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  cart: {
    marginTop: 30,
    padding: 15,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'green',
    borderRadius: 10,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  total: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
