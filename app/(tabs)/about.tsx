import { StyleSheet, Text, View } from "react-native";


export default function About() {
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
    backgroundColor: "rgb(33, 52, 72)",
  },
  text: {
    fontSize: 17,
    color: "white",
  },
});