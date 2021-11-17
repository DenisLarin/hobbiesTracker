import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfileScreen } from '../../../screens/profile/ProfileScreen'

const ProfileStackNavigator = createNativeStackNavigator()

/**
 * @description - profile navigator
 * @return {JSX.Element}
 * @constructor
 */
export const ProfileNavigator = () => {
  return (
    <ProfileStackNavigator.Navigator>
      <ProfileStackNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerLargeTitle: true,
          headerTitle: 'Профиль',
        }}
      />
    </ProfileStackNavigator.Navigator>
  )
}
