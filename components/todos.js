import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandle }){
    return(
        <TouchableOpacity onPress={() => pressHandle(item.key)}>
            <Text style={styles.item}>{item.name1}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        margin:16,
        padding: 16,
        borderColor: '#bbb',
        borderStyle: 'dashed',
        borderRadius:10,
    }
})