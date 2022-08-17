import * as React from 'react';
import {View,Text, Pressable} from 'react-native';
import styles from './styles';



export default function StyledButton({ navigation })
{
 

  
    return(
    <View style ={styles.container}>
       <Pressable
        style={[styles.button]}     
        >
            <Text style={[styles.text,]} >
              Go to Profile
            </Text>
       </Pressable>

    </View>


    );
};
