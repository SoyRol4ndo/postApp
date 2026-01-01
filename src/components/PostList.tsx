import { FlatList } from "react-native";
import React from "react";
import PostItem from "./PostItem";
import { useRemovePost } from "../store/store";
import { Post } from "../types/posts.interface";

interface Props{
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  const removePost = useRemovePost();
  const handleDelete = (id: string) => {
    removePost(id);
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={(post) => post.id}
      initialNumToRender={10}
      removeClippedSubviews
      renderItem={({ item }) => (
         <PostItem
          title={item.title}
          description={item.description}
          onDelete={() => handleDelete(item.id)}
        />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 100,
      }}
      className="mt-4"
    />
  );
};

export default PostList;
