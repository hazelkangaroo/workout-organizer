import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkoutCard from '../components/WorkoutCard';
import {PlusCircleIcon } from "react-native-heroicons/solid";



const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (

    <>
      <View className='mt-20 ml-5'>
          <Text className='text-2xl font-extrabold'> Hello!</Text>
        </View>
      <ScrollView>
        <View className='relative mx-5 my-5'>
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

              </View>
          </View>

      </ScrollView>

      <View className='absolute bottom-10 bg-gray-200 w-full'>
          <TouchableOpacity className='text-center'>
            <PlusCircleIcon  size={50}/>
          </TouchableOpacity>
      </View>
  
    </>

      
        



   
   
  )
}

export default HomeScreen