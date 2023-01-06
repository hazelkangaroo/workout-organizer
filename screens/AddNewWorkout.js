import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import TagInput from '../components/TagInput'

const AddNewWorkout = () => {
  return (
    <SafeAreaView>
      <Text className='font-extrabold text-lg text-center mt-5 mb-5'>Add New Workout</Text>
      <TextInput 
        className='h-16 bg-gray-300 rounded-full mx-4 text-lg px-4 mb-7'
        placeholder='Name'/>


      <TextInput 
        className='h-16 bg-gray-300 rounded-full mx-4 text-lg px-4 mb-7'
        placeholder='Workout Total Time'/>

      <TextInput 
        className='h-16 bg-gray-300 rounded-full mx-4 text-lg px-4 mb-7'
        placeholder='Workout Description'/>

      <TextInput 
        className='h-16 bg-gray-300 rounded-full mx-4 text-lg px-4 mb-7'
        placeholder='Youtube URL'/>

      <TagInput />

      {/* <TextInput 
        className='h-16 bg-gray-300 rounded-full mx-4 text-lg px-4 mb-7'
        placeholder='Tags'/> */}


      <View className='flex-row justify-center w-full'>
        <TouchableOpacity className='bg-[#f194b4] w-1/3 flex-row justify-center rounded-full h-12 items-center'>
          <Text className='text-2xl font-extrabold text-white'>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default AddNewWorkout