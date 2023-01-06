import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddNewWorkout from '../screens/AddNewWorkout';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import AddtoPlan from '../screens/AddtoPlan';
import { Feather } from '@expo/vector-icons';
import WorkoutScreen from '../screens/WorkoutScreen';
import { Ionicons } from '@expo/vector-icons';
import SettingScreen from '../screens/SettingScreen';


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const WorkoutStack = createNativeStackNavigator();

const BottomTab = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) =>({
          tabBarShowLabel: false,
          tabBarIcon:({focused, size, color}) => {
            let iconName;
            if(route.name === 'HomeStack'){
              iconName = focused ? 'ios-home' : 'ios-home-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'WorkoutStack') {
              iconName = focused ? 'run-fast' : 'run';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            } else if (route.name === 'SettingStack') {
              iconName = focused ? 'ios-settings-sharp' : 'ios-settings-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            } 
          }
        })}
      
      
      
      >
      
      
        <Tab.Screen 
          name="HomeStack" 
          component={HomeScreenStack} 
          options={{
            headerShown: false,
          }} />

        <Tab.Screen 
          name="WorkoutStack"  
          component={WorkoutScreenStack} 
          options={{
            headerShown: false,
            
          }}/>

        <Tab.Screen 
          name="SettingStack"  
          component={SettingScreenStack} 
          options={{
            headerShown: false,
          }}/>
        

      </Tab.Navigator>
    </>
  )
}

export default BottomTab




const HomeScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: false,
          }}
          />

    <Stack.Screen 
          name="AddToPlan" 
          component={AddtoPlan} 
          options={{
            headerShown: false,
            presentation: 'modal'
          }}
          />
    </Stack.Navigator>
  )
}



const WorkoutScreenStack = () => {
  return (
    <WorkoutStack.Navigator>
      <WorkoutStack.Screen 
          name="Workout" 
          component={WorkoutScreen} 
          options={{
            headerShown: false,
          }}
          />

      <WorkoutStack.Screen 
          name="AddNewWorkout" 
          component={AddNewWorkout} 
          options={{
            headerShown: false,
            presentation:'modal'
          }}
          />
    </WorkoutStack.Navigator>
  )
}



const SettingScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
          name="Setting" 
          component={SettingScreen} 
          options={{
            headerShown: false,
          }}
          />
    </Stack.Navigator>
  )
};