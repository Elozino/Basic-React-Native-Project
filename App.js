import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ListItem from "./components/ListItems";

export default function App() {
  const [value, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, value]);
    setTask("");
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/**Tasks */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginBottom: 80,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionText}>Today's Task</Text>
          <View style={styles.item}>
            {/* This where the task will go */}
            <ListItem text={"Task 1"} />
            <ListItem text={"Task 2"} />
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <ListItem text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Write A Task */}
      <KeyboardAvoidingView
        behaviour={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTask}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={value}
          onChange={(e) => setTask(e.target.value)}
        />

        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.TextWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  sectionText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "rgba(50, 20, 6, 1)",
    marginBottom: 30,
  },
  item: {},
  writeTask: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: "80%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 26,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  TextWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
});
