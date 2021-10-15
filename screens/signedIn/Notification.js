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

class Notification extends Component{
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
      marginTop:'-90%',
      height:'11%',
      }}
      />
      <Text
      style={styles.bigText}> Notification</Text>
      
       <Image 
        style={styles.rectangleMessages}        
        source = {require('../../android/app/src/img/rectangleHome.png')}/>
      <Image 
        style={styles.pinkCircle}        
        source = {require('../../android/app/src/img/pinkCircle.png')}/>
      <Text style={styles.messageSenderName}>John</Text>
      <Text style={styles.messageFromSend}>I would be out of city for one week, Can you help the robert in exam preparation with your kids. </Text>
      
      <TouchableOpacity style={styles.declinebutton}>
        <Text style={styles.declineText}>Decline</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.acceptbutton}>
        <Text style={styles.acceptText}>Accept</Text>
      </TouchableOpacity>
      <Image 
        style={styles.rectangleMessages2}        
        source = {require('../../android/app/src/img/rectangleHome.png')}/>
      <Text style={styles.acceptInvite}>Daddy accept invite</Text>
      <Text style={styles.acceptInviteInfo}>Thanks for inviting me.</Text>
          
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
    paddingTop:95,
    paddingBottom:1,
    marginTop:-10,
    marginBottom:1,
  },
  searchIcon:{
    marginTop:-20,
    marginLeft:'85%',
  },
  bigText:{
    fontSize:23,
    fontWeight: 'bold',
    marginTop:'-10%',
    marginLeft:'-60%',
  },
  rectangleMessages:{
    marginTop:30,
    width: '95%',
    height: '26%',
  },
  pinkCircle:{
    marginTop:'-28%',
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
  declinebutton: {    
    flexDirection:'row',
    backgroundColor:'#F1F1F1',
    width: '40%',
    height: '7%',
    padding: 10,
    borderRadius: 8,
    marginTop: '3%',
    marginLeft: '-45%',    
  },
  acceptbutton: {    
    flexDirection:'row',
    backgroundColor:'#841AFF',
    width: '40%',
    height: '7%',
    padding: 10,
    borderRadius: 8,
    marginTop: '-9.5%',
    marginRight: '-50%',
  },
  declineText:{
    fontSize:10,
    alignSelf: "center",
    marginLeft: '38%', 
  },
  acceptText:{
    fontSize:10,
    color:'#ffff',
    alignSelf: "center",
    marginLeft: '38%',

  },
  rectangleMessages2:{
    marginTop:30,
    width: '95%',
    height: '16%',
  },
  acceptInvite:{
    fontWeight:'bold',
    fontSize:15,
    marginTop: '-17%',
    marginLeft: '-49%',
  },
  acceptInviteInfo:{
    fontSize:11,
    marginTop: '1%',
    marginLeft: '-55%',

  },



});
export default Notification;