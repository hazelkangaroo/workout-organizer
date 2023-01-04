import { View, Text } from 'react-native'
import React from 'react'
import {ClockIcon } from "react-native-heroicons/solid";

const WorkoutCard = ({id, title, length}) => {
  return (
    <View className='flex-row items-center space-x-2 px-5 py-2'>
      <Text className='text-2xl font-bold flex-1'>{title}</Text>
      <ClockIcon color="#b298dc"/>
      <Text className='text-purple-400 text-2xl'>{length}</Text>
    </View>
  )
}

export default WorkoutCard