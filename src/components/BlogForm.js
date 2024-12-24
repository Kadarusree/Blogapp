import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const BlogForm = ({
  blogTitle,
  blogDescription,
  onSubmit,
}) => {
  const [title, setTitle] = useState(blogTitle);
  const [description, setDescription] = useState(blogDescription);
  return (
    <View>
      <View style={styles.childFlex}>
        <Text style={styles.text}>Enter Title</Text>
        <TextInput
          placeholder="Titele"
          value={title}
          style={styles.textInput}
          onChangeText={(text) => {
            setTitle(text);
          }}
        ></TextInput>
        <Text style={styles.text}>Enter Description</Text>
        <TextInput
          placeholder="Description"
          value={description}
          style={styles.textInput}
          onChangeText={(text) => setDescription(text)}
        ></TextInput>

        <TouchableOpacity
          style={styles.touchOpacity}
          onPress={() => {
            onSubmit(title, description, () => {
              console.log("callback");
              navigation.navigate("Index");
            });
          }}
        >
          <Text style={styles.touchAbleText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 10,
  },
  textInput: {
    fontSize: 20,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  touchOpacity: {
    backgroundColor: "blue",
    marginTop: 20,
    borderRadius: 5,
    height: 48,
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  touchAbleText: {
    color: "white",
    alignSelf: "center",
  },
});

export default BlogForm;
