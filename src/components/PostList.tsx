import { FlatList, View } from "react-native";
import React from "react";
import PostItem from "./PostItem";
import { Post } from "../types/posts.interface";
import { deletePost } from "../api/postsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Loading from "./Loading";

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: string) => deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleDelete = (id: string) => {
    mutation.mutate(id);
  };

  
  return (
    <FlatList
      data={posts}
      keyExtractor={(post) => post.id}
      initialNumToRender={10}
      removeClippedSubviews
      ListHeaderComponent={
        <View>
          {mutation.isPending &&  <Loading />}
        </View>
      }
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
