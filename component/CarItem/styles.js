import { StyleSheet } from 'react-native';

const styles =StyleSheet.create({
    
    




    Background:{
        color:'white',
        width: '100%',
        height: '100%',
         
    },
    
    percentage:{
        color:"rgba(4,28,50,1)",
        width: 200,
        height: 50,
        fontSize: 20,
        fontWeight: '900',
       textAlign: "left",
       letterSpacing: 0.7,
    },




    completed:{
        color:"rgba(4,28,50,1)",
        width: 200,
        height: 50,
        fontSize: 9,
        fontWeight: '600',
       textAlign: "left",
       letterSpacing: 0.7,
         
    },
    orders:{
    
        color:'black', 
                width: 200,
                height: 50,
                fontSize: 14,
                fontWeight: '400',
               textAlign: "left",
         
    },

    Logo1:{
        position: 'absolute',
        width:35,
        height:35,
        
         
    },


    SmallRectangle:{
         
        position: 'absolute',
        width:100,
        height:71,
        borderRadius:10,
        backgroundColor: "rgba(209,209,209,1)"},

    WhiteRectangle:{
        position: 'absolute',
        width:328,
        height:115,
        borderRadius:10,
        borderWidth:1,
        borderColor:"rgba(4,28,50,1)",
        backgroundColor: "rgba(255,255,255,1)"},

    Rectangle:{
        position:"absolute",
        left:10,
     width:328,
     height:164,
     borderRadius:10,
     backgroundColor: "rgba(6,70,99,1)"},

     Date:{
        color:'white', 
        width: 150,
        height: 22.7,
        fontSize: 14,
        fontWeight: '300',
       textAlign: "left",
    
               
        },

        Temp:{
            color:'white', 
            width: 114,
            height: 50,
            fontSize: 40,
            fontWeight: '100',
           textAlign: "left",
        
                   
            },
             
    logo:{
        position: 'absolute',
        width:81,
        height:32,
        left: -180,
        top:33,
        },

            bell:{
               
            position: 'absolute',
            left: 165,
            top:35,

            },

            condition:{
                color:'white', 
                width: 200,
                height: 50,
                fontSize: 14,
                fontWeight: '300',
               textAlign: "left",
            
                       
                },
                marketplace:{
                    color:"rgba(4,28,50,1)", 
                    fontSize: 14,
                    fontWeight: '300',
                   textAlign: "left",
                                  
                           
                    },
                 
                    Complete:{
                    color:"rgba(4,28,50,1)",
                    fontSize: 16,
                    fontWeight: '600',
                   textAlign: "left",
                    },


     
        weather:{
            position: 'absolute',
            width: 99.18,
            height: 66.24,
            left: 205,
            top: -95,
             
        },

    carContainer:{
        position:"absolute",
        left:-197,
        marginTop: '0%',
        width: '100%',
        height: 165,
        alignItems: 'center',
       
        backgroundColor: '#ECB365',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
    
    },
    
    titles:{
        position: "absolute",
       //marginTop: '6%',
       width: 75,
       left: 16, 
       top: 79,
       
       
    },
    
    title: {
      
      fontSize: 18,
     
    
      fontWeight: '600',
      textAlign: "left",
    
    },

    subtitle: {
        fontSize: 16,
        fontWeight: '300',
       
        textAlign: "left",
        letterSpacing: -0.5,
        width: 150,
        
    },
     
    title1: {
        position: "absolute",
        marginTop:"-25%",
        fontSize: 18,
        fontWeight: '600',
        textAlign: "left",
        color: 'white',
        letterSpacing: -0.5,
        width: 90,
      
      },
  
      subtitle1: {
        position: "absolute",
        left: 0, 
         top: 0,

        fontSize: 16,
          fontWeight: '300',
        
       
          textAlign: "left",
          letterSpacing: -0.5,
          width: 42,
          color: 'white'
          
      },


    image: {
        width: '100%',
        height: '100%', 
        resizeMode: 'cover',
        position: 'absolute',
       
    },

    buttonsContainer: {
        position : 'absolute',
        bottom: 50,
        width: '100%',
              
    }
});

export default styles;