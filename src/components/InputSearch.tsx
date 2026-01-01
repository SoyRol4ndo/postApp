import React from "react";
import { View } from "react-native";
import { Input } from "../ui/Input";
import { Search } from "lucide-react-native";

interface Props{
  search: string;
   setSearch: (search: string) => void 
}

const InputSearch = ({ search, setSearch }: Props) => {
  return (
    <View className="mt-4 bg-white rounded-2xl">
      <Input
       icon={<Search size={18} color="black" />}
       placeholder="Búsqueda por nombre"
       value={search}
       onChangeText={setSearch}
       />
    </View>
  );
};

export default InputSearch;
