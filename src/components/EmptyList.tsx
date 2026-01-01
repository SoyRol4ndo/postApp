import { View, Text } from "react-native";
import React from "react";
import { Inbox } from "lucide-react-native";

const EmptyList = () => {
  return (
    <View className="flex-1 items-center justify-center py-20">
      <Inbox size={56} color="#A3A3A3" strokeWidth={1.2} />
      <Text className="mt-4 text-lg font-semibold text-gray-400">
        No hay elementos para mostrar
      </Text>
      
    </View>
  );
};

export default EmptyList;