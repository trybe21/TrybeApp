import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
 
import SplashScreen from 'react-native-splash-screen';

class OnboardingScreen4 extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }  
  render(){
    return (
      <View style={styles.body}>
                    
        <Text style={styles.bigText}>Join Other Trybes</Text>
        <Text style={styles.smallText}>Connected with other trybes and create the</Text>
        <Text style={styles.smallText}>next level communities with other trybes.</Text>
        <Image 
        style={styles.imageEllipse56}
        source = {require('../android/app/src/img/Ellipse56.png')}/>  
        <Image 
        style={styles.imageEllipse53}
        source = {require('../android/app/src/img/Ellipse53.png')}/>      
        <Image 
        style={styles.imageEllipse54}
        source = {require('../android/app/src/img/Ellipse54.png')}/> 
        <Image 
        style={styles.imageEllipse55}
        source = {require('../android/app/src/img/Ellipse55.png')}/>   
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
  imageEllipse56:{
    alignContent: "center",
    paddingTop: -25,
    marginTop: -25,
    marginBottom: 1,
    //paddingHorizontal: 1,
    marginHorizontal: -15,
    top: 60,
    left: -70,
    resizeMode: 'contain',
  },
  imageEllipse53:{
   alignContent: "center",
   paddingTop: -25,
    marginTop: -25,
    marginBottom: 1,
    //paddingHorizontal: 1,
    marginHorizontal: -15,
    top: -200,
    left: 20,
    resizeMode: 'contain',
  },
  imageEllipse54:{
  alignContent: "center",
   paddingTop: -25,
    marginTop: -25,
    marginBottom: 1,
    //paddingHorizontal: 1,
    marginHorizontal: -15,
    top: -170,
    left: 110,
    resizeMode: 'contain',
  },
  imageEllipse55:{
    alignContent: "center",
   paddingTop: -25,
    marginTop: -25,
    marginBottom: 1,
    //paddingHorizontal: 1,
    marginHorizontal: -15,
    top: -60,
    left: 80,
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
export default OnboardingScreen4;