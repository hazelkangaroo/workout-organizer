import { View, Text, TextInput} from 'react-native'
import React from 'react'
import TagComponent from './TagComponent'


const TagInput = () => {
  return (
    <View>



    	<View className='flex-row'>
        <TagComponent title="arm" />
        <TagComponent title="shoulder"/>
        <TagComponent title="leg"    />
      </View>

       <TextInput 
        className='h-16 bg-gray-300 rounded-full mx-4 text-lg px-4 mb-7'
        placeholder='Add New Tag'/>
        
    </View>
  )
}

export default TagInput