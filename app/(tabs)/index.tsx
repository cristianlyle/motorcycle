import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCart } from '../CartContext';


const PlaceholderImage = require("../../assets/images/motobike.png");

export default function App() {
   const { cart, total, addToCart } = useCart();

  const motorcycles = [
    { id: '1', name: 'Yamaha Mio Sporty', price: 65000, image: 'https://imgcdn.zigwheels.ph/medium/gallery/exterior/86/1857/yamaha-mio-sporty-91022.jpg' },
    { id: '2', name: 'Honda Click 125i', price: 78000, image: 'https://i.pinimg.com/736x/2f/03/4f/2f034f2f60bd3bec80ed724ec4ca72e2.jpg' },
    { id: '3', name: 'Kawasaki Barako II', price: 88000, image: 'https://imgcdn.zigwheels.ph/large/gallery/exterior/74/979/kawasaki-barako-ii-slant-front-view-full-image-791676.jpg' },
    { id: '4', name: 'Honda SP 125', price: 88000, image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/43482/sp-125-right-front-three-quarter.jpeg' },
    { id: '5', name: 'Kawasaki  Ninja 125', price: 88000, image: 'https://imgcdn.stablediffusionweb.com/2024/11/11/f02840b5-80e0-4488-ad6e-957876cd6f5a.jpg' },
    { id: '6', name: 'Suzuki GSX-S1000', price: 88000, image: 'https://imgcdn.zigwheels.ph/large/gallery/exterior/83/1787/suzuki-gsx-s1000-abs-slant-rear-view-full-image-244110.jpg' },
    { id: '7', name: 'Honda ADV 160', price: 88000, image: 'https://imgcdn.oto.com/medium/gallery/exterior/73/2617/honda-adv-160-slant-rear-view-full-image-283713.jpg' },
    { id: '8', name: ' Suzuki Gixxer SF 155', price: 88000, image: 'https://visor.ph/wp-content/uploads/2024/10/Gixxer-5.jpg' },

  ];



  return (
    <>

        <View style={styles.container}>

    <Text style={styles.title}>🏍️   Online Motorcycle Shop </Text>
      
    <View style={styles.container1}>
         <View style={styles.containerQuote}>
           <Text style={styles.quote}>Your next ride starts
             here — built for the wild, shipped to your garage.</Text>
    </View> 
    <View style={styles.motobikeImage}>
      <Image source={PlaceholderImage}  />
    </View>

    </View>

    <Text style = {styles.text}>Recommended Motorcycle</Text>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  {motorcycles.map((bike) => (
    <View key={bike.id} style={styles.card}>
      <Image source={{ uri: bike.image }} style={styles.image} />
      <Text style={styles.name}>{bike.name}</Text>
      <Text style={styles.price}>Price: ₱{bike.price.toLocaleString()}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addToCart(bike)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  ))}
</ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1c1c1c', 
  },
  container1: {
    width: '100%',
    height: 175,
flexDirection: 'row',
    borderRadius: 20,
  },
  title: {
    fontSize: 24, 
    marginTop: 35,
    color: "red", 
    fontWeight: "bold", 
    marginBottom: 20, 
    textAlign: "center"
  },
  quote:{
 fontSize: 16,
 color: 'white',
  },
  containerQuote: {
    justifyContent: 'center',
    width: '60%',
    padding: 10,
    borderRadius: 10,

  },
  motobikeImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
  },
  card: {
    marginRight: 15, 
    width: 150,  
    height: 225,   
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#2c2c2c',
  
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white', // White text for contrast
    marginBottom: 5,
  },
  price: {
    fontSize: 12,
    color: 'lightgray', // Subtle gray for price
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'red', // Red button for action
    padding: 3,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cart: {
    marginTop: 30,
    padding: 15,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'red', // Red border for cart
    borderRadius: 10,
    backgroundColor: '#2c2c2c',
  },
  cartTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  emptyCart: {
    color: 'lightgray',
    textAlign: 'center',
  },
  cartItem: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  total: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  text: {
    color: 'white', 
    fontSize: 16,
    marginBottom: 10,
  },
});