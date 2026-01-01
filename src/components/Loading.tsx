import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size="large" color="#6366f1" className="mb-4" />
      <Text className="text-lg font-semibold text-gray-600">Cargando...</Text>
    </View>
  )
}

export default Loading