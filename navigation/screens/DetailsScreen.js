import * as React from 'react';
import styles from '../../component/StyledButton/styles';
import {View,Text, Pressable,Image, ScrollView} from 'react-native';


export default function DetailsScreen({ navigation }) {
    return (
 <ScrollView style={{ flex: 1,  }}>
            
            <View style ={styles.containerprofile}>
                <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 22, fontWeight: '500',marginTop:10 }}>Profile 
                </Text>
                <Image source={require('../../assets/images/profilepic.png')} style={styles.profilepic} />
                <Text style={{ fontSize: 25, fontWeight: '400' }}>Raju Farmer
                </Text>
           
                <Text style={{ fontSize: 20, fontWeight: '300' }}>Hyderabad 
                </Text>
                <Text style={{ fontSize: 20, fontWeight: '300' }}>+91 XXXX XXXXX 
                </Text>
           
               {/*My Crops Container*/}
                    <View style ={styles.mycrops}>
                        <Text style={{ fontSize: 20, fontWeight: '600', left:-100, top:10 }}>My Crops
                        </Text>  
                        <Image source={require('../../assets/images/rightarrow.png')} style={{ position:'absolute', top:20 , left:290 }} />
                        <Image source={require('../../assets/images/coconut.png')} style={{ position:'absolute', top:45 , left:40, height:39, width:39, }} />
                        <Text style={{ fontSize: 10, fontWeight: '500', left:-105, top:60 }}>Coconut
                        </Text>  
         
                    </View>
               {/*Options Container*/}
                <View style ={{ }}>
                            <Text style={{ fontSize: 20, fontWeight: '500', marginTop:'5%', left:2,}}>Options
                           </Text> 
                           
                           <Pressable style={[styles.buttonoption]}>
                           <Image source={require('../../assets/images/rightarrow.png')} style={{ position:'absolute', top:20 , left:350, opacity:0.3}} />
                           <Text style={{ fontSize: 20, fontWeight: '400',left:-115, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                          Language
                          </Text>
                          <Text style={{ fontSize: 15, fontWeight: '300',left:-93, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                          Select your Language
                          </Text>
                          </Pressable>

                          <Pressable style={[styles.buttonoption]}>
                          <Image source={require('../../assets/images/rightarrow.png')} style={{ position:'absolute', top:20 , left:350, opacity:0.3}} />
                          <Text style={{ fontSize: 20, fontWeight: '400',left:-108, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                          Notification
                         </Text>
                         <Text style={{ fontSize: 15, fontWeight: '300',left:-115, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                         Stay Updated
                          </Text>
                         </Pressable>

                        <Pressable style={[styles.buttonoption]}>
                        <Image source={require('../../assets/images/rightarrow.png')} style={{ position:'absolute', top:20 , left:350, opacity:0.3}} />
                        <Text style={{ fontSize: 20, fontWeight: '400',left:-133, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                          KYC
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: '300',left:-97, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                        Complete your KYC
                          </Text>
                       </Pressable>

                        <Pressable style={[styles.buttonoption]}>
                        <Image source={require('../../assets/images/rightarrow.png')} style={{ position:'absolute', top:20 , left:350, opacity:0.3}} />
                        <Text style={{ fontSize: 20, fontWeight: '400',left:-98, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                         Bank Account
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: '300',left:-86, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                          Link your Bank Account
                          </Text>
                        </Pressable>

                         <Pressable style={[styles.buttonoption]}>
                         <Image source={require('../../assets/images/rightarrow.png')} style={{ position:'absolute', top:20 , left:350, opacity:0.3}} />
                         <Text style={{ fontSize: 20, fontWeight: '400',left:-95, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                         Refer and Earn
                         </Text>
                         <Text style={{ fontSize: 15, fontWeight: '300',left:-85, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                          Refer your friend to earn
                          </Text>
                        </Pressable>

                         <Pressable style={[styles.buttonoption]}>
                         <Image source={require('../../assets/images/rightarrow.png')} style={{ position:'absolute', top:20 , left:350, opacity:0.3}} />
                        <Text style={{ fontSize: 20, fontWeight: '400',left:-119, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                          Rate US
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: '300',left:-66, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                         Your feedback is valuable to us
                          </Text>
                     </Pressable>
                </View>
            {/*Support Container*/}
            <View style ={{left:0 }}>
                            <Text style={{ fontSize: 20, fontWeight: '500', marginTop:'5%', left:3,}}>Support
                           </Text> 

                           <Pressable style={[styles.buttonoption]}>
                           <Image source={require('../../assets/images/rightarrow.png')} style={{ position:'absolute', top:20 , left:350, opacity:0.3}} />
                           <Text style={{ fontSize: 20, fontWeight: '400',left:-115, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                          Language
                          </Text>
                          <Text style={{ fontSize: 15, fontWeight: '300',left:-93, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                          Select your Language
                          </Text>
                          </Pressable>

                          <Pressable style={[styles.buttonoption]}>
                          <Image source={require('../../assets/images/rightarrow.png')} style={{ position:'absolute', top:20 , left:350, opacity:0.3}} />
                          <Text style={{ fontSize: 20, fontWeight: '400',left:-108, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                          Notification
                         </Text>
                         <Text style={{ fontSize: 15, fontWeight: '300',left:-115, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                         Stay Updated
                          </Text>
                         </Pressable>

                        <Pressable style={[styles.buttonoption]}>
                        <Image source={require('../../assets/images/rightarrow.png')} style={{ position:'absolute', top:20 , left:350, opacity:0.3}} />
                        <Text style={{ fontSize: 20, fontWeight: '400',left:-133, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                          KYC
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: '300',left:-97, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                        Complete your KYC
                          </Text>
                       </Pressable>

                        <Pressable style={[styles.buttonoption]}>
                        <Image source={require('../../assets/images/rightarrow.png')} style={{ position:'absolute', top:20 , left:350, opacity:0.3}} />
                        <Text style={{ fontSize: 20, fontWeight: '400',left:-98, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                         Bank Account
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: '300',left:-86, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                          Link your Bank Account
                          </Text>
                        </Pressable>

                         <Pressable style={[styles.buttonoption]}>
                         <Image source={require('../../assets/images/rightarrow.png')} style={{ position:'absolute', top:20 , left:350, opacity:0.3}} />
                         <Text style={{ fontSize: 20, fontWeight: '400',left:-95, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                         Refer and Earn
                         </Text>
                         <Text style={{ fontSize: 15, fontWeight: '300',left:-85, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                          Refer your friend to earn
                          </Text>
                        </Pressable>

                         <Pressable style={[styles.buttonoption]}>
                         <Image source={require('../../assets/images/rightarrow.png')} style={{ position:'absolute', top:20 , left:350, opacity:0.3}} />
                        <Text style={{ fontSize: 20, fontWeight: '400',left:-119, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                          Rate US
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: '300',left:-66, color: "rgba(6,70,99,1)", letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                         Your feedback is valuable to us
                          </Text>
                     </Pressable>

                     <Pressable style={[styles.buttonoptionlast]}>
                        <Text style={{ fontSize: 20, fontWeight: '400',left:-119, color: 'white', letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                          fuehui
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: '300',left:-93, color: 'white', letterSpacing:-0.5, }}  onPress={() => navigation.navigate('Settings')}>
                        fefhuh
                          </Text>
                     </Pressable>


            </View>
            </View>
</ScrollView>
);
}



