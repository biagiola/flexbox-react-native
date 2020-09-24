import React from 'react'
import { View, Text } from 'react-native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

export default function Dimensions() {

  const { landscape } = useDeviceOrientation()

  const { screen } = useDimensions("screen")
  const width = screen.width
  const height = screen.height

  return(
    <View style={{
      backgroundColor: 'tomato',
      padding: 20,
      width: 250,
      height: landscape ? 250 : 100
    }}>
      <Text>Screen dimensions</Text>     
    <Text>Width: { width }</Text>
    <Text>Height: { height }</Text>
    </View>
  )
}