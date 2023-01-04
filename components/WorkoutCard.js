import { View, Text } from 'react-native'
import React from 'react'
import { SparklesIcon } from "react-native-heroicons/solid";

const WorkoutCard = ({id, title, length}) => {
  return (
    <View className='flex-row'>
      <Text className='text-xl font-bold'>{title}</Text>
      <SparklesIcon />
      <Text className='text-pink-500'>{length}</Text>
    </View>
  )
}

export default WorkoutCard