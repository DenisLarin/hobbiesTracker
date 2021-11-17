import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TrackerNavigator } from './navigators/TrackerNavigator'

const TabNavigator = createBottomTabNavigator()

/**
 * @description - RootNavigator for authorization user
 * @returns {JSX.Element}
 * @constructor
 */
export const RootNavigator = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name={'Трекеры'} component={TrackerNavigator} />
    </TabNavigator.Navigator>
  )
}
