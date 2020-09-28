import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableWitOutOpacity } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    /* setCourseGoals([...courseGoals, enteredGoal]) */
    /* setCourseGoals(currentGoal => [...courseGoals, enteredGoal]) */
    setCourseGoals(currentGoals => [...currentGoals, 
    { id: Math.random().toString(), value: enteredGoal }
    ])
  }


  const deletedGoalHandler = () => {

  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer} >
        <TextInput 
          placeholder='Course Goal' 
          style={styles.input} 
          onChangeText={goalInputHandler}  
          value={enteredGoal}
        />
        <Button title='add' onPress={addGoalHandler} />
      </View>

      <FlatList 
        /*keyExtractor in case we use id insted key value*/
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={ itemData =>  (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
        
      
    </View> 
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    alignItems: 'center' 
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%', 
    borderColor: 'black',
    padding: 10,
    borderWidth: 1
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})
