import React from "react";
import { View, Text } from "react-native";
import { Plus } from "lucide-react-native";
import { IconButton } from "../ui/IconButton";

interface Props{
  onAdd: () => void 
}

const Header = ({ onAdd }: Props) => {
  return (
    <View className="flex flex-row justify-between mt-5">
      <View>
        <Text className="text-4xl font-bold ">Posts</Text>
        <Text className="text-gray-400">Controla tu contenido</Text>
      </View>

      <IconButton
        accessibilityLabel="Add"
        icon={<Plus size={18} color="white" />}
        variant="solid"
        size="lg"
        onPress={onAdd}
      />
    </View>
  );
};

export default Header;
