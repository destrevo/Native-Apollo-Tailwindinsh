import React from "react";
import { View, Text } from "react-native";

function Profile({ route }) {
    const listing = route.params;
    return (
        <View>
            <Text>Profile</Text>
        </View>
    );
}

export default Profile;