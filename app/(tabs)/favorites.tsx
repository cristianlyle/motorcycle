import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFavorites } from '../FavoritesContext';

export default function FavoritesScreen() {
  const { favorites } = useFavorites();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
    
      {favorites.length === 0 ? (
        <Text style={styles.empty}>No favorites yet!</Text>
      ) : (

          
        <ScrollView>
          {favorites.map((bike) => (
            <SafeAreaView style={styles.rowContainer}>
            <View key={bike.id} style={styles.card}>
              <Image source={{ uri: bike.image }} style={styles.image} />
              <Text style={styles.name}>{bike.name}</Text>
              <Text style={styles.price}>₱{bike.price.toLocaleString()}</Text>
               </View>
            </SafeAreaView>
            
          ))}
        </ScrollView>
                   

      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
     padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  empty: { color: 'gray', textAlign: 'center' },
  card: { 
    maxWidth: '40%',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 15, 
    padding: 15, 
    borderRadius: 10, 
    backgroundColor: '#f5f5f5' },
image: { 
    width: 100, 
    height: 100, 
    borderRadius: 5, 
    marginRight: 10 
},  
name: { 
  fontSize: 16, 
  fontWeight: 'bold' },
  price: { 
    fontSize: 14, 
    color: 'gray' 
  },

    rowContainer:{
      display : 'flex',
      flexDirection: 'row',
      backgroundColor: 'black',
      flexWrap: 'wrap',


    },
    
});