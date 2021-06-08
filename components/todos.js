import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandle }){
    return(
        <TouchableOpacity onPress={() => pressHandle(item.key)}>
            <View style={styles.item}>
            <MaterialIcons name='delete' color='#333'/>
            <Text style={styles.itemText}>{item.name1}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    item: {
        margin:16,
        padding: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        // borderStyle: 'dashed',
        borderRadius:10,
        flexDirection: 'row',
        
    },
    itemText: {
        marginLeft: 10,
        // marginTop: 1,
    }
})