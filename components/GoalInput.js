import { StyleSheet, View, TextInput, Modal, Image, Pressable, Text } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function handleGoalInput(inputText) {
    setEnteredGoalText(inputText);
  };

  function addGoalHandler() {
    if (enteredGoalText.trim() === "") { return; }

    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.inputContainer}>
          <Image 
            style={styles.image} 
            source={require('../assets/images/goal.png')} 
          />
          <TextInput 
            onChangeText={handleGoalInput} 
            placeholder='Your goal..' 
            style={styles.inputText}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={addGoalHandler} 
              style={({ pressed }) => [styles.button, styles.addButton, pressed && styles.pressedButton]}
            >
              <Text style={styles.buttonText}>Add Goal</Text>
            </Pressable>
            <Pressable 
              onPress={props.onCancel} 
              style={({ pressed }) => [styles.button, styles.cancelButton, pressed && styles.pressedButton]}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  inputContainer: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#492b9d',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  inputText: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },

  addButton: {
    backgroundColor: "#fbc02d",
  },

  cancelButton: {
    backgroundColor: "#e74c3c",
  },

  pressedButton: {
    opacity: 0.7,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  }
});
