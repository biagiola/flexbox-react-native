import React from 'react'
import { StatusBar, Platform, Alert, Button, StyleSheet, Text, View, Image, TouchableOpacity, TouchableNativeFeedback} from 'react-native';

export default function Part1() {
  return (
    <View style={styles.container}>
      {/* <Text numberOfLines={3}> element is unique relative to layout: everything inside is no longer using the Flexbox layout but using text layout. This means that elements inside of a are no longer rectangles, but wrap when they see the end of the line.</Text> */}
      
      <TouchableOpacity onPress={ () => consoleLog() }>
        <Image 
          blurRadius={2}
          fadeDuration={800}
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300' }}
          />
        </TouchableOpacity>

        <TouchableNativeFeedback 
          
          onPress={() => console.log('Touchable Native feedback')}>
          <View style={{ width: 100, height: 35, backgroundColor: "orange"}}/>
        </TouchableNativeFeedback>

        <Button 
          style={styles.container}
          title='Click me'
          color='tomato'
          onPress={() => alert('Button tapped')}
          //onPress={() => Alert.alert('Button tapped')} // same as above
        />
        <Button 
          style={styles.container}
          title='Click me again'
          color='tomato'
          onPress={() => Alert.alert('Title box', 'This is the descripton message', [
            { text: 'Yes', onPress:() => console.log('Yes was pressed')},
            { text: 'No', onPress:() => console.log('No was pressed')},
          ])}
        />

        {/* this is only for IOS */}
        <Button 
          title='Prompt it'
          color='dodgerblue'
          onPress={() => Alert.prompt("Title box", "This is the descripton message changed", text => console.log(text))}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // statusBar is where is the top bar of the phone 
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});