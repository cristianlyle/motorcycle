import { StyleSheet, Text, View } from "react-native";


export default function Setting() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Yes Of Course</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 17,
    color: "black",
  },
});