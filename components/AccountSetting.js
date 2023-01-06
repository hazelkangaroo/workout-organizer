import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';



const AccountSetting = () => {
	const navigation = useNavigation();
  return (
    <View className='border-b-2 border-gray-300 mt-5'>
      <View className='flex-row justify-center mb-2'>
				<Text className='text-sm text-gray-500'>You are not logged in!</Text>
			</View>
      <View className='flex-row justify-center mb-5'>
        <TouchableOpacity 
					className='bg-[#e9c46a] flex-row justify-center w-3/5 rounded-full py-1'
					onPress={() => {navigation.navigate("LoginSignup")}}
					>
						<View className='flex-row items-center'>
							<Text className='text-xl font-bold'>Log In</Text>
							<MaterialCommunityIcons name="slash-forward" size={24} color="black" />
							<Text className='text-xl font-bold'>Sign Up</Text>
						</View>
            
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default AccountSetting