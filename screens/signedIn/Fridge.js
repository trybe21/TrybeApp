import 'react-native-gesture-handler';
import React, {Component ,useState} from 'react';
import {Image, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';


import { Header } from 'react-native-elements';

import FridgeImages from '../../components/FridgeImages';
import FridgeFilter from '../../components/FridgeFilter';


class Fridge extends Component{

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
      style={styles.bigText}>Fridge</Text>
      <View style={{flexDirection:'row', marginTop:-20,}}>
      <Image
      style={styles.uploadIcon}        
      source = {require('../../android/app/src/img/uploadIcon.png')}/>
      <Image
      style={styles.funnelIcon}        
      source = {require('../../android/app/src/img/funnelIcon.png')}/>
      <Image
      style={styles.addIcon}        
      source = {require('../../android/app/src/img/addIcon.png')}/>
      </View>
      <View style={{flexDirection:'row',}}>
      <Image
      style={styles.mumIcon}   
      source = {require('../../android/app/src/img/mumIcon.png')}/>
      <Text style={{marginTop:95, marginLeft:-46,}}>Me</Text>
      <Image
      style={styles.kizzyIcon}   
      source = {require('../../android/app/src/img/Ellipse51.png')}/>
      <Text style={{marginTop:95, marginLeft:-42,}}>Kizzy</Text>
      </View>      
      <ScrollView>
      <FridgeImages/>
      </ScrollView>
      <View>
        <FridgeFilter/>
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
  },
  arrowIcon:{
    marginTop: '-35%',
    marginLeft: '-83%',
  },
  bigText:{
    fontSize:23,
    fontWeight: 'bold',
    marginLeft:'-50%',  
    marginTop:'-7%',
  },
  uploadIcon:{
    marginLeft: '65%',
  },
  funnelIcon:{
    marginLeft: '5%',
    width:16,
    height:16,
  },
  addIcon:{
    marginLeft: '5%',
    width:16,
    height:16,
  },
  mumIcon:{
    marginLeft: '-46%',
    marginTop:'7%',
  },
  kizzyIcon:{
    marginLeft: '6%',
    marginTop:'9%',
    width:55,
    height:55,
  },
});
export default Fridge;
