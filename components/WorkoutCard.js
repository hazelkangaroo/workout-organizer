import { View, Text } from 'react-native'
import React from 'react'

const WorkoutCard = ({id, title, length}) => {
  return (
    <View className='flex-row'>
      <Text className='text-xl font-bold'>{title}</Text>
      
      <Text className='text-pink-500'>{length}</Text>
    </View>
  )
}

export default WorkoutCard