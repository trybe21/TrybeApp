import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,  
} from 'react-native';

class Add extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }  
  render(){
    return (
      <View style={styles.body}>
        <Text style={styles.bigText}>Add Profile Photo</Text>
        <Text style={styles.smallText}>If you don’t want to add profile photo now,</Text>
        <Text style={styles.smallText}>Don’t worry, you can add it later.</Text>
        <Image 
        style={styles.image}
        source = {require('..TrybeApp/android/app/src/img/photoIcon.png')}/>
        <Text style={styles.skipText}>Skip</Text>
        <Image 
        style={styles.nextbuttonimage}
        source = {require('..TrybeApp/android/app/src/img/nextbuttonIcon.png')}/>
        

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
    top:'-20%',
  },
  smallText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "normal",
    fontSize: 11,
    top:'-20%',
    color:'#7D7D7D',
  },
  image:{
    top:'-15%',
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
export default AddProfile;