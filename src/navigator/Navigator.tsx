import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Router } from '../router/Router'
import { SafeAreaProvider } from 'react-native-safe-area-context'

/**
 * @description - Navigator component
 * @returns {JSX.Element}
 * @constructor
 */
export const Navigator = ({}) => {
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
    return <>{navigator}</>
  }
  return <NavigationContainer>{getNavigator()}</NavigationContainer>
}
