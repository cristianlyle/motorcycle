import React from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

interface Bike {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface ModalDescriptionProps {
  visible: boolean;
  bike: Bike | null;
  onClose: () => void;
}


const ModalDescription: React.FC<ModalDescriptionProps> = ({ visible, bike, onClose }) => (
  <Modal
    visible={visible}
    transparent={true}
    animationType="slide"
    onRequestClose={onClose}
  >
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        {bike && (
          <>
            <Image source={{ uri: bike.image }} style={styles.modalImage} />
            <Text style={styles.modalTitle}>{bike.name}</Text>
            <Text style={styles.modalDescription}>{bike.description}</Text>
            <Pressable style={styles.closeButton} onPress={onClose}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Close</Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
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
    height: 200,
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
});

export default ModalDescription;