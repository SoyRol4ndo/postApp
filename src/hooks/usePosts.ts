import { useEffect, useMemo, useState } from "react";
import { Post } from "../types/posts.interface";

interface Props{
    posts: Post[]
}

export const usePosts = ({posts}:Props) => {

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

  return {
        search,
        setSearch,
        filteredPosts
    }
}
