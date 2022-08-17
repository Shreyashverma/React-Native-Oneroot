import React, {useState, useEffect} from 'react';
import {View,Text, Image} from 'react-native';
import HelpButton from '../HelpButton';
import PopdownButton from "../PopdownButton";
import StyledButton from "../StyledButton";
import styles from './styles';
import styles1 from '../HelpButton/styles1';




let fruits =[{id:1,name:'Farm 1 '},{id:2,name:'Farm 2  '},{id:3,name:'Farm 3'}]

const CarItem= (props) => {
  //Constants created
    const {name,tagline,name1,tagline1,image} = props;
    const [date, setDate ] = useState(null);
    
  const[selectedItem, setSelectedItem] = useState(null)
    const onSelect = (item) => {setSelectedItem(item)}

 //Date Function   
  useEffect(() => {
    let today = new Date();
    let A =(today.getMonth()+1);  
    let date =' '+ today.getDate() + '/' + (today.getMonth()+1 ) +'/'+today.getFullYear();
    setDate(date);
    });
    
  return(
      <View>
        <View style={styles.Background}>
        <View style={styles.carContainer}>
        <View style={styles1.buttonsContainer}>
{/* Helpbutton */}
        <HelpButton />
{/* logo and notification bell */}        
            <Image source={require('../../assets/images/onerootlogo.png')} style={styles.logo} />
            <Image source={require('../../assets/images/bell.png')} style={styles.bell} />
        </View>

          <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{tagline}</Text>

          </View>
        </View>


        <View style={styles.buttonsContainer}>
          
            
           </View>


        <View style={[styles.Rectangle, { position: "absolute", left: -170, top: 136, }]}>
          <View style={styles.titles}>
            <PopdownButton 
            value={selectedItem}
            data={fruits}
            onSelect={onSelect}/>
            <Text style={styles.title1}>{name1}</Text>
            <Text style={styles.subtitle1}>{tagline1}</Text>

            <Text style={[styles.Date, { position: "absolute", left: 180, top: -24, }]}> Today,{date}</Text>
            <Text style={[styles.Temp, { position: "absolute", left: 0, top: 30, }]}>27°c</Text>
            <Text style={[styles.condition, { position: "absolute", left: 85, top: 53, }]}>Mostly Cloudy</Text>
            </View>
            <View>
            <View style={[styles.SmallRectangle, { position: "absolute", left:0 , top: 300, }]}>
            </View>
            </View><View style={[styles.SmallRectangle, { position: "absolute", left: 113, top: 300, }]}>
            </View>
             </View><View style={[styles.SmallRectangle, { position: "absolute", left: 55, top: 436, }]}>
            </View>
            </View><View style={[styles.WhiteRectangle, { position: "absolute", left: -170, top: 315, }]}>
            <Image source={require('../../assets/images/weather.png')} style={styles.weather} />
            <Text style={[styles.Complete, { position: "absolute", left: 10, top: 15, }]}>Complete Your Profile</Text>
            <Text style={[styles.marketplace, { position: "absolute", left: 10, top: 30, }]}>Get to use market place</Text>

            <Image source={require('../../assets/images/Crop.png')} style={[styles.Logo1, { position: "absolute", left: 255, top: 130, }]} />
            <Image source={require('../../assets/images/shovels.png')} style={[styles.Logo1, { position: "absolute", left: 140, top: 130, }]} />
            <Image source={require('../../assets/images/harvest.png')} style={[styles.Logo1, { position: "absolute", left: 30, top: 130, }]} />

            <Text style={[styles.orders, { position: "absolute", left: 30, top: 165, }]}>Orders</Text>
            <Text style={[styles.orders, { position: "absolute", left: 125, top: 165, }]}>Sell Produce</Text>
            <Text style={[styles.orders, { position: "absolute", left: 245, top: 165, }]}>My Crops</Text>

           
            <Text style={[styles.completed, { position: "absolute", left: 224, top: 57, }]}>COMPLETED</Text>
            


            <StyledButton />
            </View>
            </View>                            
                       

     );
};

export default CarItem;