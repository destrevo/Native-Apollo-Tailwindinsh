import React from "react";
import { View,Text } from "react-native";

function Home({ route }) {
  const listing = route.params;
  return (
    <View>
     <Text>Home</Text>
    </View>
  );
}

export default Home;
