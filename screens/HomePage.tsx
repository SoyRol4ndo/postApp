import React, { useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../src/components/Header";
import InputSearch from "../src/components/InputSearch";
import PostList from "../src/components/PostList";
import { NewPostSheet } from "../src/components/NewPostSheet";

const HomePage = () => {
  const { top } = useSafeAreaInsets();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const handleCreate = (data: { name: string; description: string }) => {
    console.log(data);
  }
  return (
    <View
      className="bg-gray-100"
      style={{ flex: 1, paddingTop: top, paddingHorizontal: 10 }}
    >
      {/* Header */}
      <Header onAdd={() => setOpen(true)} />

      {/* Input to search */}
      <InputSearch />

      {/* Post list */}
      <PostList />

      <NewPostSheet 
        open={open} 
        onClose={handleClose}
        initialName=""
        initialDescription=""
        onCreate={handleCreate}
      />
    </View>
  );
};

export default HomePage;
