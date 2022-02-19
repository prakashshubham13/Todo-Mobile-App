import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

const Task = (props) => {
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <TouchableOpacity  style={styles.square}></TouchableOpacity>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <TouchableOpacity onPress={()=>props.delete(props.index)}>
        <AntDesign style={styles.delete} name="delete" size={24} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
        shadowColor: "#55BCF6",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.80,
        shadowRadius: 4.41,
        
        elevation: 2,
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
    itemText:{
        maxWidth:'80%',
    },
    delete:{
        color:'crimson',
    }
})