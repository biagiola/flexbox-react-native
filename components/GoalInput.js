import React, { useState }  from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = ({addGoalHandler}) => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  return (
    <View style={styles.inputContainer} >
        <TextInput 
          placeholder='Course Goal' 
          style={styles.input} 
          onChangeText={goalInputHandler}  
          value={enteredGoal}
        />
        <Button title='add' onPress={() => addGoalHandler(enteredGoal)} />
        {/* <Button title='add' onPress={addGoalHandler.bind(enteredGoal, enteredGoal)} /> javilla syntax */}
    </View>
  )
}

const styles = StyleSheet.create({
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

export default GoalInput