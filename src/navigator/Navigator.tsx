import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Router } from '../router/Router'
import { SafeAreaProvider } from 'react-native-safe-area-context'

/**
 * @description - Navigator component
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const Navigator = ({ ...props }) => {
  /**
   * @description - Get auth or unAuth navigators
   * @returns {JSX.Element}
   */
  const getNavigator = (): JSX.Element => {
    const isAuth = true
    let navigator: null | JSX.Element = null
    if (isAuth) {
      navigator = Router.AUTH_ROOT_NAVIGATOR_COMPONENT
    } else {
    }
    console.log('navigator', navigator)
    return <>{navigator}</>
  }
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>{getNavigator()}</NavigationContainer>
    </SafeAreaProvider>
  )
}
