import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {ClockIcon } from "react-native-heroicons/solid";

const WorkoutCard = ({id, title, length}) => {
  return (
    <TouchableOpacity className='flex-row items-center space-x-5 px-5 my-5 mx-5 bg-purple-200 rounded-xl h-20'>
      <Text className='text-2xl font-bold flex-1'>{title}</Text>
      <ClockIcon color="#b298dc" size={30}/>
      <Text className='text-white font-extrabold text-2xl'>{length}</Text>
    </TouchableOpacity>
  )
}

export default WorkoutCard