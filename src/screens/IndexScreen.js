import React, { useContext, useRef, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import FontAwesome from '@expo/vector-icons/FontAwesome';


const IndexScreen = ({navigation}) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  const flatListRef = useRef(null);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [state]);

  return (
    <View style={{ flex: 1 }}>
      <Text>Index Screen</Text>
      <TouchableOpacity style={styles.touchOpacity}>
        <Text style={styles.text}>Add Post</Text>
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        data={state}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text
              onPress={
                () => {
                    navigation.navigate('Show', {id: item.id});
                }
              }>{item.title}    -     {item.id}</Text>
              <FontAwesome name="trash" size={24} color="black" 
              onPress={()=>{
                deleteBlogPost(item.id);
              }}/>
            </View>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
        <TouchableOpacity  style = {styles.headerIcon} onPress={() => {
            navigation.navigate('Create');
        }}>
            <FontAwesome name="plus" size={30} color="black" />
        </TouchableOpacity>
        ),
    };
}

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

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },

  headerIcon : {
    marginRight: 10
  }
});

export default IndexScreen;