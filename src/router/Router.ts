import React from 'react'
import { RootNavigator as AuthRootNavigator } from './authorization/RootNavigator'

/**
 * @description - Router
 */
export class Router {
  static AUTH_ROOT_NAVIGATOR_COMPONENT = AuthRootNavigator()
  static UNAUTH_ROOT_NAVIGATOR_COMPONENT = AuthRootNavigator()
}
