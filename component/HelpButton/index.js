import React from 'react';
import {View,Text,Pressable} from 'react-native';
import styles1 from './styles1';


const HelpButton= (props) => {
 
  
   
    return(
    <View>
      <Pressable
      style={styles1.button}
      onPress={() => {console.warn("Help button is pressed")}}>
       <Text style={styles1.text}>Help</Text>

      </Pressable>
      
      </View>


    );
};

export default HelpButton;