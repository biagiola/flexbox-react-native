//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, Platform, Alert, Button, StyleSheet, Text, View, Image, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import Part1 from './part1'
import Part2 from './part2'
import Dimensions from './dimentions'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Part1/>
      <Part2/>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "50%"
        }}
      ></View>
      <View
        style={{
          backgroundColor: 'tomato',
          flex: 0.5,
          width: 50,
          height: 50
        }}
      ></View> */}
      <Dimensions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
