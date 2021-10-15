import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,  
} from 'react-native';

class OnboardingScreen2 extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }  
  render(){
    return (
      <View style={styles.body}>
                    
        <Text style={styles.bigText}>Create Events</Text>
        <Text style={styles.smallText}>Create events to organize your tribe and</Text>
        <Text style={styles.smallText}>assign event to other members and share</Text>
        <Text style={styles.smallText}>events with other trybes.</Text>
        <Image 
        style={styles.lunchtimeIcon}
        source = {require('../android/app/src/img/lunchtimeIcon.png')}/>
        <Image 
        style={styles.familyEveningIcon}
        source = {require('../android/app/src/img/familyEveningIcon.png')}/>
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
    paddingBottom:1
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
  lunchtimeIcon:{
    top:'-10%',
    left:'15%',
  },
  familyEveningIcon:{
    top:'-9%',
    left:'-1%',
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
export default OnboardingScreen2;