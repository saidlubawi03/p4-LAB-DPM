import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Card, Divider } from 'react-native-paper';

const ScoreBoard = ({ teamName, score, onIncrement, onDecrement }) => {
  return (
    <Card style={styles.scoreBoard}>
      <Card.Title title={teamName} titleStyle={styles.teamName} />
      <Divider />
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{score}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={onIncrement}
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          +
        </Button>
        <Button
          mode="contained"
          onPress={onDecrement}
          style={styles.button}
          labelStyle={styles.buttonText}
          disabled={score === 0}
        >
          -
        </Button>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  scoreBoard: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: '#f5f5f5',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  scoreContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  button: {
    width: '40%',
    backgroundColor: '#4caf50',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScoreBoard;
