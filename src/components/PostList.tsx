import { ScrollView } from "react-native";
import React from "react";
import PostItem from "./PostItem";

const PostList = () => {
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingBottom: 100,
    }}
    className="mt-4">
      <PostItem title="Post 1" description="Description 1" onDelete={() => {}} />
      <PostItem title="Post 2" description="Description 2" onDelete={() => {}} />
      <PostItem title="Post 3" description="Description 3" onDelete={() => {}} />
    </ScrollView>
  );
};

export default PostList;
