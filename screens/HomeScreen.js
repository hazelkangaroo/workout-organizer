import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import WorkoutCard from '../components/WorkoutCard';
import {PlusIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  
  const navigation = useNavigation();


  return (

    <>
      <View className='mt-20 ml-5'>
          <Text className='text-2xl font-extrabold'> Hello!</Text>
      </View>

      <View className='h-3/4'>
      <ScrollView className='bg-gray-100'>
        <View className='relative mx-5 my-3'>
              <View >
                  <WorkoutCard  
                      title="arm"
                      length={30}
                      className=''
                  />

                  <WorkoutCard  
                      title="arm"
                      length={30}
                  />

                  <WorkoutCard  
                      title="abs"
                      length={20}
                  />

                <WorkoutCard  
                      title="abs"
                      length={20}
                  />


                <WorkoutCard  
                      title="abs"
                      length={20}
                  />

                <WorkoutCard  
                      title="abs"
                      length={20}
                  />

                <WorkoutCard  
                      title="abs"
                      length={20}
                  />

                <WorkoutCard  
                      title="abs"
                      length={20}
                  />

              </View>
          </View>

      </ScrollView>
      </View>
      

      <View className='absolute bottom-3 w-full flex-row justify-center'>
        
          <TouchableOpacity 
            className=' bg-[#e9c46a] w-2/6 rounded-full flex-row justify-center py-4 shadow-xl'
            onPress={() => {navigation.navigate("AddToPlan")}}
            >
            <View>
              <PlusIcon size={50} color='black'/>
            </View> 
          </TouchableOpacity>
      </View>

  
    </>

      
        



   
   
  )
}

export default HomeScreen