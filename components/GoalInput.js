import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal
} from 'react-native';

const GoalInput = ({ goals, setGoals, addModal, setAddModal }) => {
  const [currentGoal, setCurrentGoal] = useState('');

  const addNewGoal = () => {
    if (currentGoal && !JSON.stringify(goals).includes(`"${currentGoal}"`)) {
      setGoals([...goals, { id: currentGoal, value: currentGoal }]);
    }

    setAddModal(false);
    setCurrentGoal('');
  };

  return (
    <Modal visible={addModal} animationType="slide">
      <View style={styles.innerContainer}>
        <TextInput
          placeholder="Enter your goal"
          style={styles.goalInput}
          onChangeText={setCurrentGoal}
          value={currentGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addNewGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={() => setAddModal(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goalInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;