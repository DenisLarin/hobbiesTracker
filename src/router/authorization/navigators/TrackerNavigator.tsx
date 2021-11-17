import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TrackersScreen } from '../../../screens/trackers/TrackersScreen'

const TrackerStackNavigator = createNativeStackNavigator()

export const TrackerNavigator = () => {
  return (
    <TrackerStackNavigator.Navigator>
      <TrackerStackNavigator.Screen
        name="Trackers"
        component={TrackersScreen}
        options={{
          headerShown: false,
        }}
      />
    </TrackerStackNavigator.Navigator>
  )
}
