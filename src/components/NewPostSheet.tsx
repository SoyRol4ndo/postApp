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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { createPost } from "../api/postsApi";
import { Post } from "../types/posts.interface";

interface Props {
  open: boolean;
  onClose: () => void;
}

const NewPostSheet =({ open, onClose }: Props) => {
  const insets = useSafeAreaInsets();
  const queryClient = useQueryClient();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const onCancel = () => {
    setName("");
    setDescription("");
    onClose();
  };

  const mutation = useMutation({
    mutationFn: (post: Post) => createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      // Ejecutar onCancel() después de terminar la mutación correctamente
      onCancel();
    }
    
  });

  // No permitir cerrar ni usar acciones mientras mutation.isPending
  const isProcessing = mutation.isPending;

  const handleCreate = () => {
    if (!name?.trim() || !description?.trim() || isProcessing) {
      return;
    }
    mutation.mutate(
      {
        id: Date.now().toString(),
        title: name?.trim(),
        description: description?.trim()
      }
    );
  };

  return (
    <Modal
      visible={open}
      transparent
      animationType="slide"
      onRequestClose={onCancel}
    >
      {/* Backdrop */}
      <Pressable className="flex-1 bg-black/30" onPress={onCancel} disabled={isProcessing} />

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
            editable={!isProcessing}
          />

          {/* Field: Descripcion */}
          <Input
            multiline
            value={description}
            onChangeText={setDescription}
            placeholder="Ingrese la descripción del post"
            label="Descripción"
            containerClassName="mt-5"
            editable={!isProcessing}
          />

          {/* Divider */}
          <View className="mt-6 h-px bg-gray-200" />

          {/* Botones de accion */}
          <View className="mt-4 flex-row gap-4 justify-evenly">
            <Button
              onPress={onCancel}
              title="Cancelar"
              variant="outline"
              type="error"
              disabled={isProcessing}
            />
            <Button
              onPress={handleCreate}
              disabled={isProcessing || !name?.trim() || !description?.trim()}
              title={"Guardar"}
              loading={isProcessing}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

export default NewPostSheet