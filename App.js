import { useState } from 'react';
import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addGoal(enteredText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() }
    ]);

    hideModal();
  };

  function showAddModal() {
    setIsModalVisible(true);
  }

  function hideModal() {
    setIsModalVisible(false);
  }

  function deleteGoal(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        
        <GoalInput visible={isModalVisible} onAddGoal={addGoal} onCancel={hideModal} />

        <View style={styles.heading}>
          <Text style={styles.title}>Your Goals ({goals.length})</Text>
        </View>

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals} 
            renderItem={itemData => (
              <GoalItem 
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteGoal={deleteGoal}
              />
            )} 
            keyExtractor={(item) => item.id} 
            alwaysBounceVertical={false} 
          />
        </View>

        <Pressable 
          onPress={showAddModal} 
          style={({ pressed }) => [
            styles.fab, 
            pressed && styles.fabPressed
          ]}
        >
          <Text style={styles.fabText}>+</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#311b6b',
  },

  goalsContainer: {
    flex: 9,
    marginTop: 20,
  },

  fab: {
    position: 'absolute',
    right: 30,
    bottom: 40,
    width: 60,
    height: 60,
    backgroundColor: '#fbc02d',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  fabPressed: {
    opacity: 0.7,
  },

  fabText: {
    fontSize: 32,
    color: '#311b6b',
    fontWeight: 'bold',
  },

  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbc02d',
    paddingVertical: 10,
    marginHorizontal: 8,
    marginTop: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  title: {
    fontSize: 18,
    color: '#311b6b',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
