import React from 'react'
import { View, Text } from 'react-native'
import { Navigator } from './navigator/Navigator'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { Colors } from './core/Colors'

/**
 * @description - Root component of the application
 * @returns {JSX.Element}
 * @constructor
 */
export const App = ({}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigator />
    </SafeAreaView>
  )
}
