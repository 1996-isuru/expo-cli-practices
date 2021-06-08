import React, { useState } from "react";
import {StyleSheet, View, FlatList} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todos";
import AddTodo from "./components/addTodo";


export default function App() {
  const [people, setPeople] = useState([
    { name1: "isuru", key: "1" },
    { name1: "srimal", key: "2" },
    { name1: "sandruwan", key: "3" },
    { name1: "kamal", key: "4" }, 
    { name1: "nisa-", key: "5" },
  ]);

  const pressHandle = (key) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.key != key);
    });
  }

  const submitHandler = (text) => {
    setPeople((prevPeople) => {
      // console.log(text);
      return [
        { name1: text, key: Math.random().toString() },
        ...prevPeople
      ];
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <TodoItem item={item} pressHandle = {pressHandle}/>
        )}
      />
      <AddTodo submitHandler={submitHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});
