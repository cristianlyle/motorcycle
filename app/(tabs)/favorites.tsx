import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFavorites } from '../FavoritesContext';
import ModalDescription from '../ModalDescription';





export default function FavoritesScreen() {
  const { favorites } = useFavorites();

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
      <Text style={styles.title}>Favorites</Text>
    
      {favorites.length === 0 ? (
        <Text style={styles.empty}>No favorites yet!</Text>
      ) : (
        <ScrollView>            
          <View style={styles.rowContainer}>

          {favorites.map((bike) => (
            <View key={bike.id} style={styles.card}>
              <TouchableOpacity
                              onPress={() => {
                                setSelectedBike(bike);
                                setModalVisible(true);
                              }}
                            >
              <Image source={{ uri: bike.image }} style={styles.image} />
              <Text style={styles.name}>{bike.name}</Text></TouchableOpacity>
               </View>
            
          ))}
                         </View>

        </ScrollView>
                   
      )}
      
    </View>
     <ModalDescription
  visible={modalVisible}
  bike={selectedBike}
  onClose={() => setModalVisible(false)}
/> </>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
     padding: 20,
     backgroundColor: '#fff' },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center'
   },
  empty: { 
    color: 'gray', 
    textAlign: 'center'
    },
  card: { 
    maxWidth: '40%',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 15, 
    padding: 15, 
    borderRadius: 10, 
   },
image: { 
    width: 130, 
    height: 130, 
    justifyContent:'center',
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
   flexDirection: "row",
   flexWrap:"wrap",
   justifyContent: 'space-evenly',

    },
    
});