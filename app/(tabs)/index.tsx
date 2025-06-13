import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import EmojiList from "@/components/EmojiList";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiSticker from "@/components/EmojiSticker";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require("../../assets/images/background-image.png");
export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>(undefined);

  const pickIamgeAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    } else {
      console.log("Image picking was canceled");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

const onModalClose = () => {
  setIsModalVisible(false);
};
  const onAddSticker = () => {
    setIsModalVisible(true);

  };
  const onSaveImageAsync = async () => {

  };

  return (
    <View style={styles.container}> 
  <View style={styles.imageContainer}>
    <ImageViewer imgSource={selectedImage || PlaceholderImage} />
    {pickedEmoji && ( 
      <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/> )}
         </View>
         {showAppOptions?(
          <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
        ):(
         <View style={styles.footerContainer}>
          <Button 
          onPress={pickIamgeAsync}
          label="Choose a Photo" theme="primary" />
          <Button 
          label="Delete a Photo"  theme="secondary"
          onPress={() => setShowAppOptions(true)}
          />
          
         </View>
)}
          <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
          </EmojiPicker>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(33, 52, 72)",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 0.33, 
    alignItems: "center",
    justifyContent: "center", 
  },
  optionsContainer: {
   position: "absolute",
   bottom: 80,
  },
  optionsRow: {
    flexDirection: "row",
   alignItems: "center",
  },
});