import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TrackerNavigator } from './navigators/TrackerNavigator'
import { ProfileScreen } from '../../screens/profile/ProfileScreen'
import { ITabBarMenu, TabBarMenus } from '../../core/tabBarMenus'
import { Colors } from '../../core/Colors'
import { AddHobbyNavigator } from './navigators/AddHobbyNavigator'
import { ProfileNavigator } from './navigators/ProfileNavigator'

const TabNavigator = createBottomTabNavigator()

/**
 * @description - RootNavigator for authorization user
 * @returns {JSX.Element}
 * @constructor
 */
export const RootNavigator = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => {
        console.log('router', route.name)
        const tabBarMenuItem = Object.values(TabBarMenus).find(
          (tabBarMenu: ITabBarMenu) => tabBarMenu.name === route.name,
        )
        if (!tabBarMenuItem) {
          throw new Error('bottom tab bar item not available')
        }
        const Icon = tabBarMenuItem.icon
        if (!Icon) {
          throw new Error('Icon not available')
        }
        return {
          tabBarIcon: ({ focused }) => {
            return <Icon color={focused ? Colors.active : Colors.grey} />
          },
          tabBarActiveTintColor: Colors.active,
          tabBarInactiveTintColor: Colors.grey,
          headerShown: false,
        }
      }}>
      <TabNavigator.Screen
        key={'tackers'}
        name={TabBarMenus.trackers.name}
        component={TrackerNavigator}
      />
      <TabNavigator.Screen
        name={TabBarMenus.add.name}
        component={AddHobbyNavigator}
      />
      <TabNavigator.Screen
        name={TabBarMenus.profile.name}
        component={ProfileNavigator}
      />
    </TabNavigator.Navigator>
  )
}
