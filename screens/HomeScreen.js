import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkoutCard from '../components/WorkoutCard';
import {PlusCircleIcon } from "react-native-heroicons/solid";



const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (

    <>
      <ScrollView>
      <View className='relative mt-10 mx-5'>
            <View>
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

      <View className='absolute bottom-10 bg-gray-200'>
          <TouchableOpacity >
            <PlusCircleIcon  size={50}/>
          </TouchableOpacity>
      </View>
  
    </>

      
        



   
   
  )
}

export default HomeScreen