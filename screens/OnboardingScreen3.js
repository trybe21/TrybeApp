import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
 
import SplashScreen from 'react-native-splash-screen';

class OnboardingScreen3 extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }  
  render(){
    return (
      <View style={styles.body}>
                    
        <Text style={styles.bigText}>Store Memories</Text>
        <Text style={styles.smallText}>By Fridge, Now you can store all memories</Text>
        <Text style={styles.smallText}> of your trybe at one place and sett it</Text>
        <Text style={styles.smallText}>whenever you want and need.</Text>
        <View style={styles.row}>
        <Image 
        style={styles.image}
        source = {require('../android/app/src/img/Rectangle82.png')}/>
        <Image 
        style={styles.image}        
        source = {require('../android/app/src/img/Rectangle68.png')}/>
        <Image 
        style={styles.image}        
        source = {require('../android/app/src/img/Rectangle75.png')}/>
        <Image 
        style={styles.image}        
        source = {require('../android/app/src/img/Rectangle73.png')}/>
        <Image 
        style={styles.image}        
        source = {require('../android/app/src/img/Rectangle77.png')}/>
        </View>
        <View style={styles.row}>
        <Image 
        style={styles.image}        
        source = {require('../android/app/src/img/Rectangle78.png')}/>
        <Image 
        style={styles.image}        
        source = {require('../android/app/src/img/Rectangle76.png')}/>
        <Image 
        style={styles.image}        
        source = {require('../android/app/src/img/Rectangle80.png')}/>
        <Image 
        style={styles.image}        
        source = {require('../android/app/src/img/Rectangle71.png')}/>
        <Image 
        style={styles.image}        
        source = {require('../android/app/src/img/Rectangle83.png')}/>
        </View>
        <View style={styles.row}>
        <Image 
        style={styles.image}        
        source = {require('../android/app/src/img/Rectangle72.png')}/>
        <Image 
        style={styles.image}        
        source = {require('../android/app/src/img/Rectangle70.png')}/>
        <Image 
        style={styles.image}        
        source = {require('../android/app/src/img/Rectangle74.png')}/>
        <Image 
        style={styles.image}        
        source = {require('../android/app/src/img/Rectangle81.png')}/>
        <Image 
        style={styles.image}        
        source = {require('../android/app/src/img/Rectangle79.png')}/> 
        </View>
           
        <Text style={styles.skipText}>Skip</Text>
        <Image 
        style={styles.nextbuttonimage}
        source = {require('../android/app/src/img/nextbuttonIcon.png')}/>      
        </View>
    ) 
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center', 
    justifyContent: 'center',
    resizeMode: 'contain',
    paddingTop:100,
    paddingBottom:100,
    
     
  },
  bigText:{
    flex: 1,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "bold",
    fontSize: 27,
    top:'-15%',
    color:'#841AFF',
  },
  smallText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "normal",
    fontSize: 12,
    top:'-15%',
    color:'#7D7D7D',
  },
  row:{
    flexDirection:'row',  

  },
  image:{
    alignContent: "center",
    paddingTop: -25,
    marginTop: -25,
    marginBottom: 1,
    //paddingHorizontal: 1,
    marginHorizontal: -15,
    resizeMode: 'contain',
  },
  
  skipText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "normal",
    fontSize: 15,
    color: '#000000',
    top:'23%',
    left:'-35%',
  }, 
  nextbuttonimage:{
    top:'18%',
    left:'35%',
  },

});
export default OnboardingScreen3;