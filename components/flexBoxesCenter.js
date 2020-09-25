import React from 'react';
import { View, TextInput, Button,  } from 'react-native';

export default function App() {
  return (
    <View style={{ 
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'space-around',
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