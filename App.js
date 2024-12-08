import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title, Provider as PaperProvider } from 'react-native-paper';
import ScoreBoard from './components/ScoreBoard';

const App = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const incrementScore = (team) => {
    if (team === 'A') {
      const newScore = teamAScore + 1;
      setTeamAScore(newScore);
      checkWinner('Team A', newScore);
    } else {
      const newScore = teamBScore + 1;
      setTeamBScore(newScore);
      checkWinner('Team B', newScore);
    }
  };

  const decrementScore = (team) => {
    if (team === 'A' && teamAScore > 0) {
      setTeamAScore(teamAScore - 1);
    } else if (team === 'B' && teamBScore > 0) {
      setTeamBScore(teamBScore - 1);
    }
  };

  const checkWinner = (teamName, score) => {
    if (score === 10) {
      alert(`${teamName} wins!`);
    }
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Title style={styles.title}>🏆 Futsal Score Tracker 🏆</Title>
        <View style={styles.card}>
          <ScoreBoard
            teamName="Team A"
            score={teamAScore}
            onIncrement={() => incrementScore('A')}
            onDecrement={() => decrementScore('A')}
          />
          <ScoreBoard
            teamName="Team B"
            score={teamBScore}
            onIncrement={() => incrementScore('B')}
            onDecrement={() => decrementScore('B')}
          />
        </View>
        <Button
          mode="contained"
          onPress={resetScores}
          style={styles.resetButton}
          labelStyle={styles.resetButtonText}
          contentStyle={{ paddingVertical: 5 }}
        >
          Reset Match
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f5e9', // Hijau lembut sebagai latar belakang
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1b5e20', // Hijau gelap untuk tulisan judul
    marginBottom: 20,
  },
  card: {
    width: '90%',
    padding: 15,
    marginVertical: 20,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#ffffff', // Putih untuk kontras
  },
  resetButton: {
    marginTop: 20,
    width: '50%',
    backgroundColor: '#0277bd', // Biru cerah untuk tombol reset
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff', // Warna putih untuk teks tombol
  },
});

export default App;
