import React, { useContext, useRef, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);
  const flatListRef = useRef(null);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [state]);

  return (
    <View style={{ flex: 1 }}>
      <Text>Index Screen</Text>
      <TouchableOpacity style={styles.touchOpacity} onPress={
        
        () => {
          addBlogPost();
        }
      }>
        <Text style={styles.text}>Add Post</Text>
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        data={state}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  touchOpacity: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default IndexScreen;