import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../core/Colors'
import { Wrapper } from '../../components/wrapper/Wrapper'

/**
 * @description - TrackersScreen screen
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const TrackersScreen = ({}) => {
  return (
    <Wrapper>
      <ScrollView>
        <View>
          <Text>Hello world</Text>
        </View>
      </ScrollView>
    </Wrapper>
  )
}
