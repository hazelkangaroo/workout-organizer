import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WorkoutScreen = () => {
	const navigation = useNavigation();
  return (
    <>
      <ScrollView className='relative'>

      </ScrollView>
			<View className='absolute bottom-10 w-full flex-row justify-center'>
				<TouchableOpacity 
					className='bg-[#e9c46a] w-3/5 rounded-full flex-row justify-center py-3'
					onPress={() => navigation.navigate("AddNewWorkout")}

					>
					<Text className='text-xl font-bold'>Add New Workout</Text>
				</TouchableOpacity>
			</View>
     
    </>
  )
}

export default WorkoutScreen