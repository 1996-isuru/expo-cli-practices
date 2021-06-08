import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todos";


export default function App() {
  const [people, setPeople] = useState([
    { name1: "isuru", key: "1" },
    { name1: "srimal", key: "2" },
    { name1: "sandaruwan", key: "3" },
    { name1: "kamal", key: "4" },
    { name1: "nisal", key: "5" },
  ]);

  const pressHandle = (key) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.key != key);
    });
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
