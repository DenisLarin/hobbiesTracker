import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddHobbyScreen } from '../../../screens/addHobby/AddHobbyScreen'

const AddHobbyStackNavigator = createNativeStackNavigator()

/**
 * @description - AddHobbyNavigator component
 * @return {JSX.Element}
 * @constructor
 */
export const AddHobbyNavigator = () => {
  return (
    <AddHobbyStackNavigator.Navigator>
      <AddHobbyStackNavigator.Screen
        name="AddHobby"
        component={AddHobbyScreen}
        options={{ headerLargeTitle: true, title: 'Новая привычка' }}
      />
    </AddHobbyStackNavigator.Navigator>
  )
}
