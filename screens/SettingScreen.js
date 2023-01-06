import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import AccountSetting from '../components/AccountSetting'



const SettingScreen = () => {
  return (
    <SafeAreaView>
      	<ScrollView>
					<AccountSetting />
				</ScrollView> 
    </SafeAreaView>
  )
}

export default SettingScreen