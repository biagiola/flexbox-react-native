import React from 'react'
import { View } from 'react-native'

export default function flexWeight() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      /* corner top left*/
      flexDirection: "row",
      alignSelf: "flex-start",

      /* corner top right*/
      flexDirection: "row",
      alignSelf: "flex-end",

      /* button right */
      alignSelf: "flex-start",
      alignItems: "flex-end",

      /* button left */
      alignSelf: "flex-end",
      alignItems: "flex-end",

    }}>
      <View style={{
          backgroundColor: 'dodgerblue',
          width: 80,
          height: 80
        }}
      >
      </View>
      <View style={{
          backgroundColor: 'gold',
          width: 80,
          height: 80
        }}
      >
      </View>
      <View style={{
          backgroundColor: 'tomato',
          width: 80,
          height: 80
        }}
      >
      </View>
    </View>
  )
}

