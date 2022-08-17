
import * as React from 'react';
import CarItem from '../../component/CarItem';
import { StyleSheet, Text, View, ImageBackground ,Pressable } from 'react-native';
import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import CircularProgress from 'react-native-circular-progress-indicator';






export default function HomeScreen({ navigation }) {
  const [value, setValue] = useState(0);
 

    
    return (
       
        <View style={styles.container}>

      <CarItem name={"Hi,Raju !"}
        tagline={"Welcome to OneRoot"}
        name1={"Hyderabad"}
        tagline1={"India"}

        taglinCTA={"Touchless Delivery"}
        image={require('../../assets/images/Model3.jpeg')} />

        <Pressable
                   style={[styles.buttonsetting]}     
                   >
                   <Text style={[styles.text,]}  onPress={() => navigation.navigate('Details')}>
                      Go to Profile
                   </Text>
        </Pressable>
         
        <View style={styles.container2}>  
        <CircularProgress 
         radius={50}
        value={70}
        textColor= {'#041C32'}
        fontSize={20}
        valueSuffix={'%'}
        inActiveStrokeColor={"rgba(82,82,82,1)"}
        activeStrokeColor={"rgba(116,149,154,1)"}        
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={9}
        title={"COMPLETED"}
        titleColor={"rgba(4,28,50,0)"}

        duration={3000}
        onAnimationComplete={() => setValue(50)}
        style={[styles.buttonsetting1]} 
      />
       <StatusBar backgroundColor="rgba(189,143,81,1)" style="light" />
       </View>

    </View> 
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  container2: {
    flex: 1,
    position: 'absolute',
    top:322,
    left:230,
    alignItems: 'center',
    justifyContent: 'center',
  },
   
  buttonsetting:{
    position : 'absolute',
    left:38,
    top:398,
    backgroundColor:"rgba(4,28,50,1)",
   height:25,
   width:123,
   borderRadius:5,
   justifyContent: 'center',
   alignItems: 'center',
  },

 
  text:{
    color:'white',
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
    alignContent:'center',
 },

 
});