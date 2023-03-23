import * as React from 'react';
import { useState } from 'react';
import { Alert, TextInput, Text, View, StyleSheet } from 'react-native';
import {RoundedButton} from "../../RoundedButton";

export const Focus = ({addSubject}) => {
  const[tmpItem,setTmpItem]=useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
     
        <Text style={styles.title}>What would you like to focus on?</Text>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}
         onChange={e=>setTmpItem(e.target.value)}
          
           />
         <RoundedButton size={25} title="+" onPress={()=>addSubject(tmpItem)}/>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputContainer: {
    marginTop: 10,
    flexDirection:"row"
    // backgroundColor:"white"
  },
  input: {
      flex:1,
      outline:"none",
      padding:10,
      backgroundColor:"white",
      marginRight:10
      
  },
});
