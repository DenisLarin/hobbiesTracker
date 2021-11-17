import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Wrapper } from '../../components/wrapper/Wrapper'

/**
 * @description - ProfileScreen component
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export const ProfileScreen = ({}) => {
  return (
    <Wrapper>
      <ScrollView>
        <Text>Profile</Text>
      </ScrollView>
    </Wrapper>
  )
}
