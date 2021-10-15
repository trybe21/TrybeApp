import React, { Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'; 
import { Divider } from 'react-native-elements/dist/divider/Divider';



class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    
  } 
  
  render(){
    return (
      <View style={styles.body}>  
      <Text
      style={styles.trybeText}>trybe</Text> 
      <Image 
        style={styles.searchIcon}        
        source = {require('../../android/app/src/img/searchIcon.png')}/>
      <Divider
      style={styles.divider}></Divider>
      <Text
      style={styles.titleText}>Trybe Members</Text> 
      <View
      style={styles.addPictureRow}>
      <Image 
        style={styles.rectangle}        
        source = {require('../../android/app/src/img/rectangleHomeIcon.png')}/>
        <Image 
        style={styles.addPictureIcon}        
        source = {require('../../android/app/src/img/addPictureIcon.png')}/> 
        <Image 
        style={styles.rectangleKizzy}        
        source = {require('../../android/app/src/img/rectangleKizzy.png')}/>        
      </View>
      <Text
      style={styles.titleText}>Today Events</Text>
      <View
      style={styles.todayEventsView}>
        <Image 
        style={styles.rectangleHome}        
        source = {require('../../android/app/src/img/rectangleHome.png')}/>
        <Image 
        style={styles.iceCreamHome}        
        source = {require('../../android/app/src/img/iceCreamHomeSmall.png')}/>
        <Text
        style={styles.dateText}>12:00 AM</Text>
        <Image 
        style={styles.greyClockOutIcon}        
        source = {require('../../android/app/src/img/greyClockOut.png')}/>
        <Image 
        style={styles.greyClockInIcon}        
        source = {require('../../android/app/src/img/greyClockIn.png')}/>
        <Text
        style={styles.timeRemainingText}>2 hour remaining</Text>
        <Image 
        style={styles.ellipsisHome}        
        source = {require('../../android/app/src/img/ellipsisHome.png')}/>
        <Text
        style={styles.eventTitle}>Lunch Time</Text>
        <Text
        style={styles.eventDetails}>In Lunch Time, Kizzy want to eat Bread and Butter. The Bread</Text>
        <Text
        style={styles.eventDetails}>should be good toasted.</Text>
        <Text
        style={styles.eventSetterName}>Mummy</Text>        
        <Image 
        style={styles.rectangleHome}        
        source = {require('../../android/app/src/img/rectangleHome.png')}/>
        <Image 
        style={styles.suitcaseHome}        
        source = {require('../../android/app/src/img/suitcaseHome.png')}/>
        <Text
        style={styles.dateText2}>01:00 PM</Text>
        <Image 
        style={styles.greyClockOutIcon}        
        source = {require('../../android/app/src/img/greyClockOut.png')}/>
        <Image 
        style={styles.greyClockInIcon}        
        source = {require('../../android/app/src/img/greyClockIn.png')}/>
        <Text
        style={styles.timeRemainingText}>3 hour remaining</Text>
        <Image 
        style={styles.ellipsisHome}        
        source = {require('../../android/app/src/img/ellipsisHome.png')}/>        
        <Text
        style={styles.eventTitle}>Parents Evening</Text>
         <Text
        style={styles.eventDetails}>Kizzy’s first parents evening...</Text>
        <Text
        style={styles.eventSetterName}>Mummy</Text> 
            
      </View>      
       
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
    paddingTop:'46%',
    
  },
  searchIcon:{
    marginTop:-20,
    marginLeft:'85%',
  },
  divider:{
    marginBottom:10,
  },
  trybeText:{    
    width:64,
    height:30,
    fontSize: 25,
    fontWeight:"bold",
    color: '#841AFF',
    marginTop:'-80%',
    marginLeft:'-75%',
    marginBottom:1,
  },
  titleText:{
    marginLeft:'-60%',
    paddingTop: 10,
    fontWeight:'700',
    fontSize: 15,
  },
  addPictureRow:{
    flexDirection:'row',
    justifyContent:'center',
  },
  rectangle:{
    marginLeft:-70,
    marginTop:10,
    borderRadius: 4,  
    borderColor: '#808080',
  },
  addPictureIcon:{
    marginLeft:-40,
    marginTop:40,
    justifyContent:'center',
  },
  rectangleKizzy:{
    marginLeft: 160,
    justifyContent:'flex-end',

  },
  todayEventsView:{
    flexDirection:'column',
    justifyContent:'center',    
  },
  rectangleHome:{
    marginTop: 10,
    marginBottom:10,

  },
  iceCreamHome:{
    marginTop: -80,   
    padding:1, 
  },
  dateText:{
    marginTop:'-16%',
    marginLeft:'13%',
    fontSize:10,
    color:'#EB5757',
  },
  greyClockOutIcon:{
    marginTop:'-2.9%',
    marginLeft:'25.5%',
  },
  greyClockInIcon:{
    marginTop:'-1.8%',
    marginLeft:'26.5%',
  },
  timeRemainingText:{
    color: '#8D8D8D',
    fontSize:10,
    marginTop:'-2.3%',
    marginLeft:'29%',
  },
  ellipsisHome:{
    marginTop:'-2.3%',
    marginLeft:'78%',
  },
  eventTitle:{
    fontWeight:'700',
    fontSize:15,
    color: '#000000',
    marginLeft:'13%',
    marginTop:'1%',
  },
  eventDetails:{
    color:'#7D7D7D',
    fontSize:10,
    marginLeft:'13%',
    marginTop:'0.2%',
  },
  eventSetterName:{
    fontSize:10,
    marginLeft:'13%',
    marginTop:'1%',

  },
  suitcaseHome:{
    marginTop: -80,   
    padding:1,
  },
  dateText2:{
    marginTop:'-14%',
    marginLeft:'13%',
    fontSize:10,
    color:'#2F80ED',
  },


});
export default Home;