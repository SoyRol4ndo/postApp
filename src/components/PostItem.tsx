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
    <View className="flex-row items-center bg-white shadow p-4 rounded-lg mb-2">
      <View className="flex-1">
        <Text className="text-lg font-bold mb-1">{title}</Text>
        <Text className="text-gray-600">{description}</Text>
      </View>
      <View className="ml-4">
          {/* Botón de trash (puedes reemplazar esto con un ícono real más adelante) */}
          <IconButton
            accessibilityLabel="Trash"
            icon={<Trash size={18} color="white" />}
            variant="solid"
            size="sm"
            className="bg-gray-400"
            onPress={onDelete}
          />
      </View>
    </View>
  )
}

export default PostItem