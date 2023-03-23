import * as React from 'react';
import {useState} from 'react'
import { Text, View, StyleSheet } from 'react-native';


export default function Focus() {
  return (
    <View style={styles.container}>
    <Text>Focus Area
    }</Text>

    <Text style={styles.text}>What would you like to focus on?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50,
    backgroundColor:"brown",
    
  },
  text:{
    fontSize:20,
    color:"white",
    
  }
 
});
