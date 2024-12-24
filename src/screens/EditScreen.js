import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogForm from "../components/BlogForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(BlogContext);
  const blogPost = state.find((post) => post.id === id);
  console.log(blogPost);

  return (
    <BlogForm
      blogTitle={blogPost.title}
      blogDescription={blogPost.description}
      onSubmit={(title, description) => {
        editBlogPost(id, title, description, () => {
          navigation.pop();
        });
      }}
    ></BlogForm>
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

  childFlex: {
    width: "90%",
    height: "90%",
    alignSelf: "center",
    justifyContent: "top",
    top: 10,
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

export default EditScreen;
