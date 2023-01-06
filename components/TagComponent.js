import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'

const TagComponent = ({title}) => {
  return (
    <TouchableOpacity 
        className='bg-slate-400 mx-3 px-2 rounded-lg'
        onPress={() => {}}
        >
      <Text className='text-base font-bold'>{title}</Text>
    </TouchableOpacity >
  )
}

export default TagComponent