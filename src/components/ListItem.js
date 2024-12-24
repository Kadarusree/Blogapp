import React from "react";
import { View, Text, StyleSheet } from "react-native";


const ListItem = ({title}) => {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}