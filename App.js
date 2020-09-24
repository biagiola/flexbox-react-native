//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, Platform, Alert, Button, StyleSheet, Text, View, Image, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import Part1 from './part1'
import Part2 from './part2'

export default function App() {

  return (
    <View style={styles.container}>
      {/* <Part1/> */}
      <Part2/>
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
