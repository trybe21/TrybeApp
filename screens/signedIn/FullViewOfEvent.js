import 'react-native-gesture-handler';
import React, {Component ,useState} from 'react';
import {Image, Text, View, StyleSheet, TextInput, TouchableOpacity, Switch} from 'react-native';



import { Header } from 'react-native-elements';

import CategoriesMenu from '../../components/CategoriesMenu';
import Post from '../../components/Post';


class FullViewofEvent extends Component{
    


  constructor(props) {
    super(props); 
    this.state = {
        
    } 
     
      
  }  
  
  render(){
      
    return (
      <View 
      style={styles.body}>
      <Header
      statusBarProps={{ barStyle: 'light-content' }}
      barStyle="light-content" // or directly
      containerStyle={{
      backgroundColor: '#ffffff',
      marginTop:'5%',
      height:'25%',
      }}
      />
      
      <Image
      style={styles.arrowIcon}        
      source = {require('../../android/app/src/img/arrowIcon.png')}/>
      <Image
      style={styles.notepadIcon}        
      source = {require('../../android/app/src/img/notepadIcon.png')}/>
      <Image
      style={styles.ellipsisHorizontalIcon}        
      source = {require('../../android/app/src/img/ellipsisHorizontal.png')}/>
      <TouchableOpacity
          style={styles.touchableOpacityCate}>
          <Text style={styles.CateText}>Food</Text>
      </TouchableOpacity>
      <Text style={styles.bigText}>Kizzy Lunch</Text>
      <Image
      style={styles.mumFVOEIcon}        
      source = {require('../../android/app/src/img/mumFVOEIcon.png')}/>

      <View style={styles.row}>
      <Image
      style={styles.clockIcon}        
      source = {require('../../android/app/src/img/clockIcon.png')}/>
      <View
      style={styles.column}>
      <Text
      style={styles.time}>12:30 - 01:00 PM</Text>
      <Text
      style={styles.timeNote}>Repeat every week on weekdays</Text>
      </View>
      </View>
      <View style={{flexDirection:'row', width:'85%',}}>
      <Image
      style={styles.listIcon}        
      source = {require('../../android/app/src/img/listIcon.png')}/>
      <Text
      style={styles.eventInformation}>In Lunch Time, Kizzy want to eat Bread and Butter. The Bread should be good toasted. </Text>

      </View>
      <View style={styles.row}>
      <Image
      style={styles.mapPinIcon}        
      source = {require('../../android/app/src/img/mapPinIcon.png')}/>
      <Image
      style={styles.mapImage}        
      source = {require('../../android/app/src/img/mapImage.png')}/>
 
      <Image
      style={styles.mapPinIconPurple}        
      source = {require('../../android/app/src/img/mapPinIconPurple.png')}/>
      </View>
      <View style={styles.column}>
      <Text style={styles.mapLocationName}>Home</Text>
      <Text style={styles.mapAddress}>140 Cedar Street, Bay Area San Fransisco, Califonia, USA</Text>

      </View>
      <View style={styles.notification}>
      <Text style={styles.notificationText}>Notifications</Text>
      <Switch
      style={styles.switch}
      trackColor={{ false: "#841AFF", true: "#841AFF" }}
      />

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
    
  },
  arrowIcon:{
    marginTop: '-35%',
    marginLeft: '-85%',
  },
  notepadIcon:{
    marginTop: '-6%',
    marginLeft: '65%',
  },
  ellipsisHorizontalIcon:{
    marginTop: '-5%',
    marginLeft: '85%',
  },
  touchableOpacityCate:{
    backgroundColor: '#FF6D6D',
    borderRadius:15,
    height:18,
    width:60,
    marginTop:60,
    marginHorizontal:1,
    marginLeft:'-75%',
  },
  CateText:{
      fontSize:10,
      color:'#FFFFFF',
      alignSelf:'center',
      marginTop:1,
  },  
  bigText:{
    fontSize:23,
    fontWeight: 'bold',
    marginLeft:'-60%',  
    marginTop:'2%',  
  },
  mumFVOEIcon:{
    marginTop: '-10%',
    marginLeft: '85%',
  },
  row:{
    flexDirection:'row',
  },
  column:{
    flexDirection:'column',

  },
  clockIcon:{
    marginLeft:'-45%',
    marginTop:'10%',
  },
  time:{
    fontSize:13,
    marginTop:'22%',
    marginLeft:10,
  },
  timeNote:{
    color:'#7D7D7D',
    fontSize:11,
    marginLeft:10,
  },
  listIcon:{
    marginLeft:'-5%',
    marginTop:'10%',

  },
  eventInformation:{
    fontSize:13,
    marginLeft:'2%',
    marginTop:'8%',
  },
  mapPinIcon:{
    marginLeft:'-7%',
    marginTop:'10%',
  },
  mapImage:{
    marginLeft:'3%',
    marginTop:'10%',

  },
  mapPinIconPurple:{
    left:'-130%',
    marginTop:'15%',
  },
  mapLocationName:{
    fontSize:13,
    marginLeft:'-10%',

  },
  mapAddress:{
    fontSize:11,
    color:'#7D7D7D',
    marginLeft:'-10%',
  },
  notification:{
      backgroundColor:'#FFFFFF',
      borderWidth:0.1,
      borderRadius:24.5,
      width:390,
      height:49,
      marginTop:'25%',
  },
  notificationText:{
      paddingLeft:30,
      paddingTop:10,
      fontSize:15,
  },
  switch:{
      marginTop:-20,

  },
});
export default FullViewofEvent;
