import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkoutCard from '../components/WorkoutCard';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <Text className='text-red-200'>Welcome Back!</Text>
        <View>
            <View>
                <WorkoutCard  
                    title="arm"
                    length={30}
                />

            </View>
        </View>

    </SafeAreaView>
   
  )
}

export default HomeScreen