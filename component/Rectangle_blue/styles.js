import { StyleSheet } from 'react-native';

const styles =StyleSheet.create({
    
    Background:{
    
        width: '100%',
        height: '100%',
         
    },
  
    carContainer:{
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
      fontFamily: "Poppins",
      fontWeight: '500',
      textAlign: "left",
    
    },

    subtitle: {
        fontSize: 16,
        fontWeight: '300',
        fontFamily: "Poppins",
        textAlign: "left",
        letterSpacing: -0.5,
        width: 150,
        
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