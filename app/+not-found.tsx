import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFound() {
  return (
    <>

    <Stack.Screen options = {{title:"Page Not Found"}} />
    <View style={styles.container} >
        <Text style={styles.text}>This page does not exist.</Text>
      <Link href="/" style={styles.button}>
        Go to Home Page.
      </Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "violet",
  },
  text: {
    fontSize: 17,
    color: "white",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
});