import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Button,
  Vibration,
  TextInput,
  Text,
  View,
  StyleSheet,
  Platform,
  Pressable,
} from 'react-native';
export default function App() {
  const [focusTimeSubject, setFocusTimeSubject] = useState(null);
  const [tmpItem, setTmpItem] = useState(null);
  const [show, setShow] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [sec, setSec] = useState(0);
  const [m, setM] = useState(0);
  const [end, setEnd] = useState(0);

  var min = 0;
  seconds = sec;

  while (seconds >= 60) {
    if (seconds >= 60) {
      min += 1;
      seconds -= 60;
    }
  }

  useEffect(() => {
    if (m >= end) {
      clearInterval(intervalId);
      Vibration.vibrate(1000);
      
    }
  }, [m]);

  if (min < 10) min = '0' + min;
  if (seconds < 10) seconds = '0' + seconds;

  const start = (minute) => {
    setEnd(minute);
    setShow(true);
    const interval = setInterval(() => {
      setSec((prev) => prev + 1);
      setM((p) => p + 1 / 60);
    }, 1000);
    setIntervalId(interval);
  };

  const sub = () => {
    setTmpItem(focusTimeSubject);
  };
  const pause = () => {
    clearInterval(intervalId);
  };

   const stop = () => {
    
    setSec(0);
    clearInterval(intervalId);
  };
  return (
    <View style={styles.container}>
      {!tmpItem ? (
        <>

      <View style={styles.logoArea}>
        <Text style={styles.logo}>FOCO</Text>
        <Text style={styles.logoText}>Let us help you</Text>
        <Text style={styles.logoText}>Focus on your goals</Text>
        </View>

          <View style={styles.titleContainer}>
      
       
      
            <Text style={styles.title}>What would you like to focus on?</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={(e) => setFocusTimeSubject(e)}
              />
              <Button size={25} title="+" color="black" onPress={sub} />
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={{ marginTop: 40, textAlign: 'center' }}>
            <Text style={styles.basic}>Things to Focus on:</Text>
            <Text style={styles.basic}>{tmpItem}</Text>
            <View style={styles.countDown}>
              <Text
                style={{ textAlign: 'center', fontSize: 120, marginLeft: 10 }}>
                {min}:{seconds}
              </Text>
            </View>
            <View>
              <Text></Text>
            </View>

            <View style={styles.buttons}>
              <Pressable onPress={() => start(1)}>
                <Text style={styles.b1}>START(1)</Text>
              </Pressable>
              <Pressable onPress={() => start(15)}>
                <Text style={styles.b2}>15</Text>
              </Pressable>
              <Pressable onPress={() => start(25)}>
                <Text style={styles.b3}>25</Text>
              </Pressable>
              <Pressable onPress={() => start(30)}>
                <Text style={styles.b4}>30</Text>
              </Pressable>

              <Pressable onPress={() => pause()}>
                <Text style={styles.b5}>PAUSE</Text>
              </Pressable>

              <Pressable onPress={() => stop()}>
                <Text style={styles.b5}>STOP</Text>
              </Pressable>
      
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  logoArea:{
    flex:0.5,
    
    marginTop:200
  },
  logo:{
      
      color:"black",
      marginLeft:120,
      fontSize:60,
      
  },
  b1: {
    backgroundColor: 'white',
    margin: 10,
    marginLeft: 20,
    width: 130,
    padding:5,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    borderRadius: 4,
     },
  b2: {
    
    backgroundColor: 'white',
    margin: 10,
    marginLeft: 20,
    width: 130,
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    borderRadius: 4,
  },
  b3: {
    backgroundColor: 'white',
    margin: 10,
    marginLeft: 20,
    width: 130,
    textAlign: 'center',

    color: 'black',
    fontSize: 30,
    borderRadius: 4,
  },
  b4: {backgroundColor: 'white',
    margin: 10,
    marginLeft: 20,
    width: 130,
    textAlign: 'center',

    color: 'black',
    fontSize: 30,
    borderRadius: 4,
  },
  b5: {backgroundColor: 'white',
    margin: 10,
    marginLeft: 20,
    width: 130,
    padding:5,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    borderRadius: 4,
  },
  buttons: {
    marginTop: 60,
    // width:90,

    // marginLeft:120,
    alignItems:"center",
    // backgroundColor: 'black',
    width: 400,
    // display:"grid",
    // justifyContent:"space-around",
    // gap: 1,
  },

  basic: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },

  titleContainer: {
    // marginTop:200,
    flex: 0.5,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    // marginTop:200
  },
  countDown: {
    heigth: 400,
    width: 350,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginLeft: 30,
    marginTop: 20,
    textAlign: 'center',
    borderRadius: 10,
  },
  inputContainer: {
    marginTop: 10,
    flexDirection: 'row',
    // backgroundColor:"white"
  },
  container: {
    flex: 1,
    backgroundColor: '#f48a75',
  },
  input: {
    flex: 1,
    outline: 'none',
    padding: 10,
    backgroundColor: 'white',
    marginRight: 10,
  },
  logoText:{
    color:"black",
    marginLeft:135,
  
  }
});
