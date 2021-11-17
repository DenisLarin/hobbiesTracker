import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TrackersScreen } from '../../../screens/trackers/TrackersScreen'

const TrackerStackNavigator = createNativeStackNavigator()

/**
 * @description - TrackerNavigator component.
 * @return {JSX.Element}
 * @constructor
 */
export const TrackerNavigator = () => {
  return (
    <TrackerStackNavigator.Navigator>
      <TrackerStackNavigator.Screen
        name="Trackers"
        component={TrackersScreen}
        options={{
          headerLargeTitle: true,
          title: 'Трекеры привычек',
        }}
      />
    </TrackerStackNavigator.Navigator>
  )
}
