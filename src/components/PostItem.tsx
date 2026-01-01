import { View, Text } from 'react-native'
import React from 'react'
import { IconButton } from '../ui/IconButton'
import { Trash } from 'lucide-react-native'

interface Props{
    title: string
    description: string
    onDelete: () => void
}

const PostItem = ({ title, description, onDelete }: Props) => {
  return (
    <View className="bg-white shadow p-4 rounded-lg mb-2">
      {/* Primera fila: título y botón */}
      <View className="flex-row items-start">
        <View className="flex-1 pr-4">
          <Text
            className="text-lg font-bold text-justify"
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        </View>
        <IconButton
          accessibilityLabel="Eliminar"
          icon={<Trash size={18} color="white" />}
          variant="solid"
          size="sm"
          className="bg-gray-400"
          onPress={onDelete}
        />
      </View>
      {/* Descripción debajo de título+botón */}
      <Text className="text-gray-600 mt-2 text-justify">
        {description}
      </Text>
    </View>
  )
}

export default PostItem