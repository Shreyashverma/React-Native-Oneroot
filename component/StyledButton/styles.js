import { StyleSheet } from 'react-native';

const styles =StyleSheet.create({
  container:{
    width : "100%",
    padding: 20,


  },

  containerprofile:{
    marginTop: '-4%',
    top:40,
    alignItems : 'center',
    width : "100%",
    padding: 20,
    backgroundColor: 'white',
  },
  
  profilepic:{
    height :115,
    width: 115,

  },

  mycrops:{
    
    marginTop: '2%',
    width: 328,
    height: 118,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth:0.5,
   

},

  
buttonoption:{
  marginTop:'2%',
  backgroundColor:'white',
 height:56,
 width:379,
 borderWidth:0.7,
 borderColor:'grey',
 borderRadius:3,
 justifyContent: 'center',
 alignItems: 'center',
},

buttonoptionlast:{
  marginTop:'2%',
  backgroundColor:'white',
 height:56,
 width:329,
 borderWidth:0,
 borderColor:'whitw',
 borderRadius:3,
 justifyContent: 'center',
 alignItems: 'center',
},

  button:{
    position : 'absolute',
    left:10,
    top:80,
    backgroundColor:"rgba(4,28,50,1)",
   height:25,
   width:123,
   borderRadius:5,
   justifyContent: 'center',
   alignItems: 'center',
  },

  
  buttonsetting:{
    position : 'absolute',
    left:130,
    top:10,
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
 },

});

export default styles;