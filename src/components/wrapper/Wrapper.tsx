import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../../core/Colors'

interface IProps {
  children: React.ReactElement
  backgroundColor?: string
  withHorizontalPadding?: boolean
}

/**
 * @description - Wrapper component
 * @param children - React element
 * @param backgroundColor - Background color of the wrapper
 * @param withHorizontalPadding - adds padding to the left and right
 * @return {JSX.Element}
 * @constructor
 */
export const Wrapper: FC<IProps> = ({
  children,
  backgroundColor = Colors.white,
  withHorizontalPadding = true,
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        paddingHorizontal: withHorizontalPadding ? 15 : 0,
      }}>
      {children}
    </View>
  )
}
