import React from 'react';
import { View, Text, TextInput, Button,  } from 'react-native';

export default function App() {
  return (
    <View style={{ 
      flex: 1, 
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center' 
    }}>
      <View style={{ 
        backgroundColor: 'gold',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
      }}><Text>1</Text></View>
      <View style={{ 
        backgroundColor: 'dodgerblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}><Text>2</Text></View>
      <View style={{ 
        backgroundColor: 'tomato',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}><Text>3</Text></View>
    </View> 
  )
}