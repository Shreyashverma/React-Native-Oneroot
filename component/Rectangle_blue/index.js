import React from 'react';
import {View,Text, ImageBackground ,Button} from 'react-native';
import HelpButton from '../HelpButton';
import StyledButton from "../StyledButton";
import styles from './styles';
import styles1 from '../HelpButton/styles1';


const CarItem= (props) => {
    const {name,tagline,taglineCTA,image} = props;

    return(
        <View style={styles.Background}> 
        <ImageBackground source={ image}
        style={styles.image}/>
        
       <View style={styles.carContainer}>
       <View style={styles1.buttonsContainer}>
       <HelpButton/>
       </View>
    

        <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
        <Text style={styles.subtitle}>{taglineCTA}</Text>
        </View>
       

    </View>

        <View style={styles.buttonsContainer}>

           <StyledButton type="primary"
           content= {"custom order"} 
           onPress={() =>{console.warn("Custom Order was pressed")}}/>

          <StyledButton type="secondary"
           content= {"Existing Inventory"} 
           onPress={() =>{console.warn("Existing was pressed")}}/>

        </View>


    </View>


    );
};

export default CarItem;

