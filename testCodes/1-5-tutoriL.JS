import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("isuru");
  const [age, setAge] = useState(9);

  const addState = () => {
    setName("srimal");
    setAge(10);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Enter Name:</Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="e.g. Jonh Doe"
          onChangeText={(val) => setName(val)}
        />
        <TextInput
          style={styles.input}
          placeholder="e.g. 44"
          onChangeText={(val) => setAge(val)}
        />
        <Text>
          Name: {name}, Age: {age}
        </Text>
        <Button title="Add state" onPress={addState} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
