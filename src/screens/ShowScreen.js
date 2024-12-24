import React, { useContext } from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Context as BlogContext } from "../context/BlogContext";

import FontAwesome from "@expo/vector-icons/FontAwesome";

const ShowScreen = ({ navigation }) => {
  const { id } = navigation.state.params;

  const state = useContext(BlogContext);
  const blogPost = state.state.find((post) => post.id === id);

  console.log(state.state.filter((post) => post.id === id));
  return (
    <View>
      <Text>{JSON.stringify(blogPost)}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
        <TouchableOpacity  style = {styles.headerIcon} onPress={() => {
            navigation.navigate('Edit', {id: navigation.getParam('id')});
        }}>
            <FontAwesome name="edit" size={30} color="green" />
        </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },

  headerIcon : {
    marginRight: 10,
  }
});

export default ShowScreen;
