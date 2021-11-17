import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Navigator } from './navigator/Navigator'

/**
 * @description - Root component of the application
 * @returns {JSX.Element}
 * @constructor
 */
export const App = ({}) => {
  return (
    <>
      <Navigator />
    </>
  )
}
