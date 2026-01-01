import React, { useState, useMemo, useEffect } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";

import Header from "../src/components/Header";
import InputSearch from "../src/components/InputSearch";
import PostList from "../src/components/PostList";
import  NewPostSheet  from "../src/components/NewPostSheet";
import EmptyList from "../src/components/EmptyList";
import Loading from "../src/components/Loading";

import { Post } from "../src/types/posts.interface";
import { listPosts } from "../src/api/postsApi";

const HomePage = () => {

  const { top } = useSafeAreaInsets();

  const {data: posts, isLoading} = useQuery( {
    queryKey: ['posts'],
    queryFn: () => listPosts(),
    staleTime: 1000 * 60 * 5  // 5 min
  })

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
      posts?.filter((post: Post) =>
        post.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      ),
    [posts, debouncedSearch]
  );

  const handleClose = () => {
    setOpen(false);
  };

  if(isLoading){
    return (
      <Loading />
    )
  }

  return (
    <View
      className="bg-gray-100 flex-1 px-4"
      style={{ paddingTop: top }}
    >
      {/* Header */}
      <Header onAdd={() => setOpen(true)} />

      {/* Input to search */}
      <InputSearch search={search} setSearch={setSearch} />

      {
        filteredPosts?.length === 0
        ? (<EmptyList />)
        : (<PostList
            posts={filteredPosts ?? []}
          />)
      }

      <NewPostSheet
        open={open}
        onClose={handleClose}
      />
    </View>
  );
};

export default HomePage;
