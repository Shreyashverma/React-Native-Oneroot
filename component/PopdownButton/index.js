import React from 'react';
import {View,Text,Pressable,TouchableOpacity,Image} from 'react-native';
import imagesPath from '../../constants/imagesPath';
import {useState, useEffect} from 'react';

import styles2 from './styles2';
import { ImageBackground } from 'react-native-web';


const PopdownButton= ({
  data = [] ,
  value = {},
  onSelect=()=>{} }) => {console.log("selected value",!!value)
  const [showOption, setShowOption] = useState(false)
   
  const onSelectedItem =(val) => {
    setShowOption(false)
      onSelect(val)}
  
   
    return(
    <View>
    <TouchableOpacity style={styles2.button}
      onPress={() => setShowOption(!showOption)}
      >
     <Text style={styles2.text}>{!!value? value?.name : 'Farms ' } </Text>
     <Image style={{transform: [{rotate: showOption? '180deg': '0deg'}]}} source={imagesPath.icDropDown}/>
     </TouchableOpacity>
     {showOption &&
     (<View>
     {data.map((val,i)=>
         {
      return(
               <TouchableOpacity key={String(i)}
               onPress={()=>onSelectedItem(val)}
               style={{backgroundColor:"white",
                 
               height:27,
               width:80,
               borderWidth:1,
               borderRadius:4,
               justifyContent: 'center',
               alignItems: 'center',
               borderColor: "rgba(6,70,99,1)",

               }}>
                <Text style={styles2.textoption}>{val.name}</Text>
               </TouchableOpacity>
            )
       
    })}
    </View>)}
     </View>
     
    );
  };

export default PopdownButton;





{/* <Pressable style={styles2.button}
      onPress={() => {console.warn("Help button is pressed")}}>
       <Text style={styles2.text}>Farm1</Text>

      </Pressable> */}