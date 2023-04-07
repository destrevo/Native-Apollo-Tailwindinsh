import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";



function Button({ title, onPress}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0569e5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
  },
  text: {
    color: "white",
    fontSize: 15,
  },
});

export default Button;