import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [addModal, setAddModal] = useState(false);

  const deleteGoal = goalId => {
    setGoals(goals.filter(goal => goal.id !== goalId));
  };

  return (
    <View style={styles.container}>
      <Button title="Add new goal" onPress={() => setAddModal(true)} />
      <GoalInput
        addModal={addModal}
        setAddModal={setAddModal}
        goals={goals}
        setGoals={setGoals}
      />
      <FlatList
        data={goals}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.value}
            deleteGoal={() => deleteGoal(itemData.item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 10,
  }
});
