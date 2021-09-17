import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Task from "../componets/Task";

function TodoList(props) {
 
  const [taskinput, Settask] = useState("");
  const [taskList, SettaskList] = useState([]);
  
  const AddItem = () => {
    Keyboard.dismiss();
    SettaskList([...taskList, taskinput]);
    Settask("");
  };


  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Today's tasks</Text>
        <View style={styles.taskContainer}>
          {taskList.map((item, index) => {
            return <Task key={index} Text={item} />;
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.keybordViewContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput value = {taskinput}
          style={styles.textInput}
          placeholder="Add your Item"
          onChangeText={(text) => Settask(text)}
        />
        <TouchableOpacity onPress={AddItem}>
          <View style={styles.circleView}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  keybordViewContainer: {
    width: "100%",
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textInput: {
    height: 50,
    backgroundColor: "#ffffff",
    width: "75%",
    borderColor: "#f0e9e9",
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
  },
  circleView: {
    height: 50,
    backgroundColor: "#ffffff",
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderColor: "#f0e9e9",
    borderWidth: 1,
  },
  background: {
    flex: 1,
    backgroundColor: "#c5d9f0",
  },
  container: {
    padding: 30,
    paddingTop: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  taskContainer: {
    marginTop: 30,
  },
});

export default TodoList;
