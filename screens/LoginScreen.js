import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import SwitchSelector from "react-native-switch-selector";
import { Button, Input} from '@rneui/themed';

const LoginScreen = () => {


	const [page, setPage] = useState(false)
	const options = [
		{ label: "Sign Up", value: 0, activeColor:"#f194b4"},
		{ label: "Log In", value: 1 , activeColor:"#f194b4"},
	];
	


	const Component = () => {
		if (page == 0) {
			return (
				<View>
					<View className>
						<Input 
							placeholder="Name"
						/>
					</View>
					
					<Input 
						placeholder="Email"
						type="email"
					/>

					<Input 
						placeholder="Password"
						type="password"
						secureTextEntry={true}
					/>

					<Input 
						placeholder="Confirm Password"
						type="password"
						secureTextEntry={true}
					/>
				</View>
			)
		}
		else {
			return (
        <View>
          <Text>Trsue</Text>
        </View>
      )

		}
	}




  return (
    <>
		<View className='mt-5 mx-2'>
			<SwitchSelector
				options={options}
				initial={0}
				onPress={() => {
					if (page === 1) {
						setPage(0)
					} else {
						setPage(1)
					}
				}}
				fontSize={17}
				bold={true}
			
				
				/>
		</View>
		


		<Component />
		</>
  )
}

export default LoginScreen