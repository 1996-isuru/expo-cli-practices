import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todos";
import AddTodo from "./components/addTodo";

export default function App() {
  const [people, setPeople] = useState([
    { name1: "isuru", key: "1" },
    { name1: "srimal", key: "2" },
    { name1: "sandruwan", key: "3" },
    { name1: "kamal", key: "4" },
    { name1: "nisala", key: "5" },
  ]);

  const pressHandle = (key) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setPeople((prevPeople) => {
        // console.log(text);
        return [{ name1: text, key: Math.random().toString() }, ...prevPeople];
      });
    } else {
      Alert.alert("OOPS!", "Todo must be over 3 charc longer", [
        { text: "Undestood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
    <View style={styles.container}>
      <Header />
      <AddTodo submitHandler={submitHandler} />
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <TodoItem item={item} pressHandle={pressHandle} style={styles.list} />
        )}
      />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    backgroundColor: '#ddd',
    flex: 1,
    // fontSize: 24,
    // marginHorizontal: 10,
    // marginTop: 24,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
