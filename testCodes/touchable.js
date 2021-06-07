import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name1: "isuru", key1: "1" },
    { name1: "srimal", key1: "2" },
    { name1: "sandaruwan", key1: "3" },
    { name1: "kamal", key1: "4" },
    { name1: "nisal", key1: "5" },
  ]);

  const pressHandle = (key1) => {
    console.log(key1);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.key1 != key1);
    });
  }

  return (
    <View style={styles.container}>
      {/* <ScrollView>
      {
        people.map(item => (
          <View key={item.key1}>
            <Text style={styles.item}>{item.name1}</Text>
          </View>
        ))
      }
      </ScrollView> */}

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.key1}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandle(item.key1)}>
            <Text style={styles.item}>{item.name1}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
