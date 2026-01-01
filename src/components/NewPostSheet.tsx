import React, { useState } from "react";
import {
  Modal,
  Pressable,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useAddPost } from "../store/store";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function NewPostSheet({ open, onClose }: Props) {

  const insets = useSafeAreaInsets();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const addPost = useAddPost();


  const handleCreate = () => {
    if (!name?.trim() || !description?.trim()) {
      return;
    }
    addPost(
      { 
        id: Date.now().toString(),
        title: name?.trim(), 
        description: description?.trim() 
      }
  );
   onCancel()
  };

  const onCancel = () => {
    setName("");
    setDescription("");
    onClose();
  }

  return (
    <Modal
      visible={open}
      transparent
      animationType="slide"
      onRequestClose={onCancel}
    >
      {/* Backdrop */}
      <Pressable className="flex-1 bg-black/30" onPress={onCancel} />

      {/* Sheet */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="absolute bottom-0 left-0 right-0"
      >
        <View
          className="rounded-t-3xl bg-white px-5 pt-3 shadow-2xl"
          style={{ paddingBottom: Math.max(insets.bottom, 16) }}
        >
          {/* Handle */}
          <View className="items-center pb-2">
            <View className="h-1 w-12 rounded-full bg-gray-200" />
          </View>

          {/* Title */}
          <Text className="text-3xl font-extrabold text-gray-900">
            Nuevo Post
          </Text>

          {/* Field: Nombre */}
          <Input
            value={name}
            onChangeText={setName}
            placeholder="Ingrese el nombre del post"
            returnKeyType="next"
            label="Nombre"
            containerClassName="mt-5"
          />

          {/* Field: Descripcion */}
          <Input
            multiline
            value={description}
            onChangeText={setDescription}
            placeholder="Ingrese la descripción del post"
            label="Descripción"
            containerClassName="mt-5"
          />

          {/* Divider */}
          <View className="mt-6 h-px bg-gray-200" />

          {/* Botones de accion */}
          <View className="mt-4 flex-row gap-4 justify-evenly">
            <Button
              onPress={onCancel}
              title="Cancel"
              variant="outline"
              type="error"
            />
            <Button
              onPress={handleCreate}
              disabled={!name?.trim() || !description?.trim()}
              title={"Create"}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
