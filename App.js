import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddtoPlan from './screens/AddtoPlan';
import AddNewWorkout from './screens/AddNewWorkout';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab from './components/BottomTab';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <BottomTab />
      {/* <Stack.Navigator>
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

        <Stack.Screen 
          name="AddNewWorkout" 
          component={AddNewWorkout} 
          options={{
            headerShown: false,
            presentation: 'modal'
          }}
          />


      </Stack.Navigator> */}
  </NavigationContainer>
  
  );
}

