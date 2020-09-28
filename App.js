import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableWitOutOpacity } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'


export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = (enteredGoal) => {
    /* setCourseGoals([...courseGoals, enteredGoal]) */
    /* setCourseGoals(currentGoal => [...courseGoals, enteredGoal]) */
    setCourseGoals(currentGoals => [...currentGoals, 
    { id: Math.random().toString(), value: enteredGoal }
    ])
  }
  return (
    <View style={styles.screen}>

      <GoalInput addGoalHandler={addGoalHandler}/>

      <FlatList 
        /*keyExtractor in case we use id insted key value*/
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={ itemData =>  <GoalItem title={itemData.item.value}/>}
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
  
})
