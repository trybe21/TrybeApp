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



class Calendar extends Component{
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
      marginTop:'-133%',
      height:'35%',
      }}
      />
      <Text
      style={styles.bigText}>Today</Text>
      <Text
      style={styles.dateText}>22 September, 2020 </Text>
      <Image 
        style={styles.funnelIcon}        
        source = {require('../../android/app/src/img/funnelIcon.png')}/>
        <Image 
        style={styles.shareIcon}        
        source = {require('../../android/app/src/img/shareIcon.png')}/>
        <Image 
        style={styles.addIcon}        
        source = {require('../../android/app/src/img/addIcon.png')}/>
        <View style={styles.calenderContainer} >
          {}


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
    paddingBottom:1,
    marginBottom:1,
  },
  bigText:{
    fontSize:23,
    fontWeight: 'bold',
    marginTop:'-50%',
    marginLeft:'-75%',
  },
  dateText:{
    fontSize:15,
    fontWeight: '700',
    marginTop:'-1%',
    marginLeft:'-55%',
  },  
  funnelIcon:{
    marginTop:'-9%',
    marginLeft:'55%',
  },
  shareIcon:{
    marginTop:'-5%',
    marginLeft:'73%',    
  },
  addIcon:{
    marginTop:'-5%',
    marginLeft:'90%',    
  },


});
export default Calendar;