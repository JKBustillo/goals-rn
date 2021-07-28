import React from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';

const GoalItem = ({ title, deleteGoal }) => {
  return (
    <TouchableNativeFeedback onPress={deleteGoal}>
      <View style={styles.listStyle}>
        <Text>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;