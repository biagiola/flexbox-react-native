import React from 'react';
import { View, Text, TextInput, Button,  } from 'react-native';

export default function App() {
  return (
    <View style={{ 
      padding: 35,
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center' 
    }}>
      <TextInput 
        placeholder='Course Goal'
        style={{ borderColor: 'black', borderWidth: 1, padding: 10 }}
      />
      <Button title='add' />
    </View> 
  )
}