import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import { useCart } from '../CartContext';
import { useFavorites } from '../FavoritesContext';
import ModalDescription from '../ModalDescription';
import RentModal from '../RentModal';
import { useRented } from '../RentedContext';
const logo1 = require('../../assets/images/logo1.png');


const sliderImages = [
  require('../../assets/images/motobike1.png'),
  require('../../assets/images/motorbike2.png'),
  require('../../assets/images/motorbike3.png'),
  require('../../assets/images/motorbike4.png'),
  require('../../assets/images/motorbike6.png'),
  require('../../assets/images/motorbike7.png'),
]; 

export default function App() {

  
  const [darkMode, setDarkMode] = useState(false);
  const { toggleFavorite, isFavorited } = useFavorites();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBike, setSelectedBike] = useState<{
    id: string;
    name: string;
    price: number;
    image: string;
    description?: string;
  } | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  
  const [rentModalVisible, setRentModalVisible] = useState(false);
const [rentingBike, setRentingBike] = useState<any>(null);
const { rentedItems, setRentedItems } = useRented();

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        // Change image
        setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
        // Fade in
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [fadeAnim]);
  
   const { addToCart } = useCart();

  const motorcycles = [
    { id: '1', 
      name: 'Yamaha Mio Sporty', 
      price: 65.50, 
      image: 'https://imgcdn.zigwheels.ph/medium/gallery/exterior/86/1857/yamaha-mio-sporty-91022.jpg', 
      description: 'A lightweight, stylish scooter perfect for city rides.' },
    
    { id: '2', 
      name: 'Honda Click 125i', 
      price: 78.50, 
      image: 'https://i.pinimg.com/736x/2f/03/4f/2f034f2f60bd3bec80ed724ec4ca72e2.jpg', 
      description: 'A fuel-efficient scooter with modern features.' },
    
    { id: '3', 
      name: 'Kawasaki Barako II', 
      price: 88.50, 
      image: 'https://imgcdn.zigwheels.ph/large/gallery/exterior/74/979/kawasaki-barako-ii-slant-front-view-full-image-791676.jpg', 
      description: 'A powerful workhorse designed for heavy-duty use.' },
    
    { id: '4', 
      name: 'Honda SP 125', 
      price: 83.50, 
      image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/43482/sp-125-right-front-three-quarter.jpeg',
      description: 'A sporty commuter with advanced technology.' },
    
    { id: '5', 
      name: 'Kawasaki  Ninja 125', 
      price: 84.50, 
      image: 'https://imgcdn.stablediffusionweb.com/2024/11/11/f02840b5-80e0-4488-ad6e-957876cd6f5a.jpg', 
      description: 'A stylish entry-level sport bike.' },
    
    { id: '6', 
      name: 'Suzuki GSX-S1000', 
      price: 82.50, 
      image: 'https://imgcdn.zigwheels.ph/large/gallery/exterior/83/1787/suzuki-gsx-s1000-abs-slant-rear-view-full-image-244110.jpg', 
      description: 'A high-performance naked bike for thrill seekers.' },
    
    { id: '7', 
      name: 'Honda ADV 160', 
      price: 81.75, 
      image: 'https://imgcdn.oto.com/medium/gallery/exterior/73/2617/honda-adv-160-slant-rear-view-full-image-283713.jpg', 
      description: 'An adventure scooter built for urban and rough roads.' },
    
    { id: '8', 
      name: 'Suzuki Gixxer SF 155', 
      price: 86.45, 
      image: 'https://visor.ph/wp-content/uploads/2024/10/Gixxer-5.jpg', 
      description: 'A sporty and efficient street bike.' },
  ];

 const scheme = useColorScheme(); 


    const themeStyles = {
      background: darkMode ? styles.darkBackground : styles.lightBackground,
      text: darkMode ? styles.darkText : styles.lightText,
    };


  return (
    <>
        <View style={[styles.container, themeStyles.background]}>
   
                <View style= {styles.logo}>
          <View>
        <Image
        source={logo1}
        style = {{width:50,height:50, resizeMode: 'contain',marginRight:15
}}
      />
      </View>
    <View>
    <Text style={[styles.title, themeStyles.text]}>ThrottleUp </Text>
    </View>
      </View>
    <View style={styles.container1}>
         <View style={styles.containerQuote}>
           <Text style={[styles.quote, themeStyles.text]}>Your next ride starts
             here — built for the wild, shipped to your garage.</Text>
     </View>
          <View style={styles.motobikeImage}>
            <Animated.Image
              source={sliderImages[currentIndex]}
              style={[styles.imageSlider, { opacity: fadeAnim }]}
            />
          </View>
        </View>

    <Text style = {[styles.text,themeStyles.text]}>Recommended Motorbikes</Text>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  {motorcycles.map((bike) => (
    <View key={bike.id} style={styles.card}>
      <TouchableOpacity
  onPress={() => {
    setSelectedBike(bike);
    setModalVisible(true);
  }}
>
  <Image source={{ uri: bike.image }} style={styles.image} />
  <Text style={styles.name}>{bike.name}</Text>
</TouchableOpacity>
<Text style={styles.price}>Price: ${bike.price.toLocaleString()}</Text>
<View style={styles.actionContainer}>
  <TouchableOpacity
    style={styles.button}
    onPress={() => {
      setRentingBike(bike);
      setRentModalVisible(true);
    }}
  >
    <Text style={styles.rent}>Rent</Text>
  </TouchableOpacity>
      <View style={styles.actionContainer}>
        
  <TouchableOpacity onPress={() => toggleFavorite(bike)}>
    <FontAwesome
      name="heart"
      size={24}
      color={isFavorited(bike) ? "red" : "gray"}
      style={{ marginRight: 10 }}
    />
  </TouchableOpacity>
  
</View>
      </View>

    </View>
    
  ))}
</ScrollView>
 <Text style = {[styles.text,themeStyles.text]}>Popular Motorbikes</Text>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  {motorcycles.map((bike) => (
    <View key={bike.id} style={styles.card}>
      <TouchableOpacity
  onPress={() => {
    setSelectedBike(bike);
    setModalVisible(true);
  }}
>
  <Image source={{ uri: bike.image }} style={styles.image} />
  <Text style={styles.name}>{bike.name}</Text>
</TouchableOpacity>
<Text style={styles.price}>Price: ${bike.price.toLocaleString()}</Text>
<View style={styles.actionContainer}>
  <TouchableOpacity
    style={styles.button}
    onPress={() => {
      setRentingBike(bike);
      setRentModalVisible(true);
    }}
  >
    <Text style={styles.rent}>Rent</Text>
  </TouchableOpacity>
      <View style={styles.actionContainer}>
  
</View>
      </View>

    </View>
    
  ))}
</ScrollView>

    </View>
<ModalDescription
  visible={modalVisible}
  bike={selectedBike}
  onClose={() => setModalVisible(false)}
/>
<RentModal
  visible={rentModalVisible}
  onClose={() => setRentModalVisible(false)}
  onRent={(info) => {
    if (rentingBike) {
      setRentedItems(prev => [...prev, { bike: rentingBike, renterInfo: info }]);
    }
  }}
  bikeName={rentingBike?.name}
/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  logo:{
    flexDirection:'row',
    marginTop: 35,
  },
imageSlider: {
  width: 120,
  height: 120,
  borderRadius: 8,
 resizeMode: 'stretch'

},
rent:{
color:'white',
fontWeight:'bold'
},

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 120,
    borderRadius: 8,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#2c2c2c',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  darkModeButton: {
    alignSelf: 'flex-end',
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#2c2c2c',
    marginBottom: 10,
  },
  
  container1: {
    width: '100%',
    height: 175,
  flexDirection: 'row',
    borderRadius: 20,
  },
  
  darkBackground: {
    backgroundColor: '#31363F',
  },
  lightBackground: {
    backgroundColor: '#FFFFFF',
  },
  darkText: {
    color: '#FFFFFF',
  },
  lightText: {
    color: '#000000',
  },
  title: {
    fontSize: 20, 
    color: "#2c2c2c", 
    fontWeight: 'bold', 
    marginBottom: '3%' , 
    marginTop: '3%' 
  },
  quote:{
 fontSize: 16,
 color: 'black',
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
  },
  card: {
    marginRight: 15, 
    width: 150,  
    height: 220,   
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
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  button: {
    padding: 3,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 11,
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
    color: 'black', 
    fontSize: 18,
    marginBottom: 0,
  },
});