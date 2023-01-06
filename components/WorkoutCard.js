import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {ClockIcon } from "react-native-heroicons/solid";

const WorkoutCard = ({id, title, length}) => {
  return (
    <TouchableOpacity className='flex-row items-center space-x-5 px-5 my-5 mx-5 bg-[#7f636e] rounded-xl h-20'>
      <Text className='text-2xl font-bold flex-1 text-white'>{title}</Text>
      <ClockIcon color="white" size={30}/>
      <Text className='text-white font-extrabold text-2xl'>{length}</Text>
    </TouchableOpacity>
  )
}

export default WorkoutCard