import React, { Component, useEffect, useState} from 'react';
import {addDays, format, getDate, isSameDay, startOfWeek} from 'date-fns';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'; 
import { Header } from 'react-native-elements';


class Messages extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }
  
  render(){
    return (
      <View style={styles.body}>  
      <Header
      statusBarProps={{ barStyle: 'light-content' }}
      barStyle="light-content" // or directly
      containerStyle={{
      backgroundColor: '#ffffff',
      justifyContent: 'space-around',
      marginTop:'-10%',
      height:'11%',
      }}
      />
      <Text
      style={styles.bigText}> Messages</Text>
      <Image style={styles.searchIcon}
      source ={require('../../android/app/src/img/searchIcon.png')}/>
       <Image 
        style={styles.rectangleMessages}        
        source = {require('../../android/app/src/img/rectangleHome.png')}/>
      <Image 
        style={styles.pinkCircle}        
        source = {require('../../android/app/src/img/pinkCircle.png')}/>
      <Text style={styles.messageSenderName}>John</Text>
      <Text style={styles.messageFromSend}>I would be out of city for one week, Can you help the robert in exam preparation with your kids. </Text>
          
      </View>
      
    ) 
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center', 
    justifyContent:'center',
    resizeMode: 'contain',
    paddingBottom:1,
    marginBottom:1,
    marginTop:'-100%',

  },
  searchIcon:{
    marginTop:-20,
    marginLeft:'85%',
  },
  bigText:{
    fontSize:23,
    fontWeight: 'bold',
    marginTop:'-11%',
    marginLeft:'-70%',
  },
  rectangleMessages:{
    marginTop:30,
    width: '95%',
    height: '10%',
  },
  pinkCircle:{
    marginTop:'-14%',
    marginLeft:'-75%',
  },
  messageSenderName:{
    marginTop:'-10%',
    marginLeft:'-53%',
    fontSize:15,
    fontWeight:'bold',
  },
  messageFromSend:{
    marginTop:'0.5%',
    marginLeft:'15%',
    fontSize:10,
    fontWeight:'400',
    color: '#7D7D7D',
  },


});
export default Messages;