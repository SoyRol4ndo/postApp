import React, { useState, useMemo, useEffect } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../src/components/Header";
import InputSearch from "../src/components/InputSearch";
import PostList from "../src/components/PostList";
import { NewPostSheet } from "../src/components/NewPostSheet";
import { Post } from "../src/types/posts.interface";
import { usePosts } from "../src/store/store";

const HomePage = () => {
  
  const { top } = useSafeAreaInsets();
  const posts = usePosts();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Efecto debounce para la busqueda
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400); // 400ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [search]);


  const filteredPosts = useMemo(
    () =>
      posts.filter((post: Post) =>
        post.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      ),
    [posts, debouncedSearch]
  );

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <View
      className="bg-gray-100 flex-1 px-4"
      style={{ paddingTop: top }}
    >
      {/* Header */}
      <Header onAdd={() => setOpen(true)} />

      {/* Input to search */}
      <InputSearch search={search} setSearch={setSearch} />

      {/* Post list */}
      <PostList
        posts={filteredPosts}
      />

      <NewPostSheet
        open={open}
        onClose={handleClose}
      />
    </View>
  );
};

export default HomePage;
