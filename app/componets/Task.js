import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function Task(props) {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.leftItems}>
        <TouchableOpacity style={styles.touchPad}></TouchableOpacity>
        <Text style={styles.padTitle}>{props.Text}</Text>
      </View>

      <View style={styles.circle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "#ffffff",
    marginBottom: 10,
    height: 50,
    flexDirection: "row",
    borderRadius: 10,
    justifyContent:'space-between',
    padding:15
  },
  leftItems: {
    flexDirection: "row",
    alignItems: "center",
  },
  touchPad: {
    backgroundColor: "#c5d9f0",
    width: 30,
    height: 30,
    marginRight: 10,
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "blue",
    borderWidth: 2.5,
    borderRadius: 5,
    alignSelf:'center'
  },
});

export default Task;
