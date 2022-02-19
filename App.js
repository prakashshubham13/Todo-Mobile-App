import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState([{val:'apple',index:'0'},{val:'ball',index:'1'}]);
  const [text, setText] = useState('');
  
  // Add new Task
  const addTask = () => {
    text && setTask([...task, {val:text,index:text}]);
    setText('');
  }

  // Delete Task
  const deleteTask = (index) => {
    let data = [...task];
    data.splice(index,1);
    setTask(data);
  }

  return (
    <View style={styles.container}>
      {/* Todays Task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
          {/* This is whwre the tsk will go */}
          <FlatList 
          data={task}
          keyExtractor={(item, index)=>index+item}
          renderItem={({item, index})=>{
            return <Task text={item.val} index={index} delete={deleteTask}/>
          }}/>
        </View>
      </View>
      {/* Write a task */}
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} value={text} onChangeText={(e)=>setText(e)} placeholder={'Write A Task'}/>
        <TouchableOpacity onPress={()=>addTask()}>
          <View style={styles.addWrapper}>
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
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{
    marginTop:30
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    borderRadius:60,
    backgroundColor:'#FFF',
    borderWidth:1,
    borderColor:'#55BCF6',
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderWidth:1,
    borderColor:'#55BCF6',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:60,
  },
  addText:{
    fontWeight:'bold',
    color:'#55BCF6',
  },
});
