import 'react-native-gesture-handler';
import React, {Component ,useState} from 'react';
import {Image, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';



import { Header } from 'react-native-elements';

import CategoriesMenu from '../../components/CategoriesMenu';
import Post from '../../components/Post';


class ChalkBoard extends Component{

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

      <Text
      style={styles.bigText}>Chalk Board</Text>
      <Image
      style={styles.searchIcon}        
      source = {require('../../android/app/src/img/searchIcon.png')}/>
      <View style={{width:'100%', marginTop:'5%'}}>
      <TextInput
      style={styles.postInput}>What you want to post</TextInput>
      <TouchableOpacity
      style={styles.sendButton}></TouchableOpacity>
      <Image
      style={styles.whiteSendIcon}        
      source = {require('../../android/app/src/img/whiteSendIcon.png')}/>
      <View
      style={styles.divider}></View>
      <CategoriesMenu/>      
      </View>
      <Text style={styles.titleText}>Recent Post</Text>
      <View>
        <Post/>
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
  bigText:{
    fontSize:23,
    fontWeight: 'bold',
    marginLeft:'-40%',  
    marginTop:'-7%',
  },
  searchIcon:{
    marginTop: '-6%',
    marginLeft: '85%',
  },
  postInput:{
    fontSize:11,
    paddingLeft:16,
    color:'#7D7D7D',
    backgroundColor:'#EBEBEB',
    borderColor:'#EBEBEB',
    borderRadius: 18,
    borderWidth: 1,
    width:330,
    height:35,
    marginLeft:'4%',
  },
  sendButton:{
    fontSize:11,
    color:'#7D7D7D',
    backgroundColor:'#841AFF',
    borderColor:'#EBEBEB',
    borderRadius: 18,
    borderWidth: 1,
    width:35,
    height:35,
    marginLeft:'88%',
    marginTop:'-8.5%',    
  },
  whiteSendIcon:{
    marginTop: '-6%',
    marginLeft: '91%',    
  },
  divider:{
    borderBottomColor:'#E5E5E5',
    borderBottomWidth: 1,
    marginTop:'7%', 
    width:'100%',    
  },    
  titleText:{
    fontWeight:'bold',
    marginLeft:'-68%', 
    marginTop:'5%',
  },
});
export default ChalkBoard;
