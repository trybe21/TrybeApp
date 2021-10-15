import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

class OnboardingScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }  
  render(){
    return (
      <View style={styles.body}>
                    
        <Text style={styles.bigText}>Make Profiles</Text>
        <Text style={styles.smallText}>Make your child profiles and it will have all</Text>
        <Text style={styles.smallText}>informations needed whenever you and</Text>
        <Text style={styles.smallText}>other members wants and need.</Text>
        <Image 
        style={styles.onScreenIcon}
        source = {require('../android/app/src/img/onbordingScreenIcon.png')}/>
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
    paddingTop:1,
    paddingBottom:1,
  },
  bigText:{
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
  onScreenIcon:{
    top:'-2%',
  },
  skipText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "normal",
    fontSize: 15,
    color: '#841AFF',
    top:'23%',
    left:'-35%',
  }, 
  nextbuttonimage:{
    top:'18%',
    left:'35%',
  },

});
export default OnboardingScreen;