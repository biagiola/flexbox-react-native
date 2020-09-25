import React from 'react'
import { View } from 'react-native'

export default function flexWeight() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      /* corner top left*/
      flexDirection: "column",
      alignSelf: "flex-start",

      /* corner top right*/
      flexDirection: "column",
      alignSelf: "flex-end",

      /* button right */
      flexDirection: "column-reverse",
      alignSelf: "flex-start",

      /* button left */
      flexDirection: "column-reverse",
      alignSelf: "flex-end",

    }}>
      <View style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 300
        }}
      >
      </View>
      <View style={{
          backgroundColor: 'gold',
          width: 100,
          height: 200
        }}
      >
      </View>
      <View style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 300
        }}
      >
      </View>
    </View>
  )
}

