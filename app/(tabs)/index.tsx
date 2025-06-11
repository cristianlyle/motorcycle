import { StyleSheet, Text, View } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";


const PlaceholderImage = require("../../assets/images/background-image.png");
export default function Index() {
  return (
    <View
      style={styles.container}
  > 
  <View 
  style={styles.imageContainer}
  >
    <ImageViewer imgSource={PlaceholderImage}/>

         </View>
         <View>
          <Button label="Choose a Photo" />
          

         </View>
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
    width: 1/3,
    alignItems: "center",
  },
});