import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogForm from "../components/BlogForm";

const BlogCreation = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);
  return <BlogForm
  title={""}
  setBlogTitle={(text) => {}}
  description={""}
    setBlogDescription={(text) => {}}
    onSubmit={(title, description) => {
    addBlogPost(title, description, () => {
      console.log("callback");
      navigation.navigate("Index");
    });
    }}
  
  ></BlogForm>
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

export default BlogCreation;
