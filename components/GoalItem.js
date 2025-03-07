import { StyleSheet, Text, Pressable } from "react-native";

function GoalItem(props) {

  return (
    <Pressable 
      onPress={props.onDeleteGoal.bind(this, props.id)}
      style={({pressed}) => pressed && styles.pressedItem}
    >
      <Text style={styles.goalList}>{props.text}</Text>
    </Pressable>
  )
}

export default GoalItem;

const styles = StyleSheet.create({
  goalList: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#fddb85',
    color: 'black'
  },

  pressedItem: {
    opacity: 0.5
  }
});