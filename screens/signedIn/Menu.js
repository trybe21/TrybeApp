import React, { Component, useEffect, useState} from 'react';
import {addDays, format, getDate, isSameDay, startOfWeek} from 'date-fns';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SectionList,
  TouchableOpacity,
} from 'react-native'; 
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';




class Menu extends Component{
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
      marginTop:'-30%',
      height:'15%',
      }}
      />
      <Text
      style={styles.bigText}>Menu</Text>
      <Image 
        style={styles.mumIcon}          
        source = {require('../../android/app/src/img/mumIcon.png')}/>
      <Image 
        style={styles.rectangleFridge}        
        source = {require('../../android/app/src/img/rectangleMenu.png')}/>
      <Image 
        style={styles.fridgeIcon}          
        source = {require('../../android/app/src/img/fridgeIcon.png')}/>
      <Text style={styles.fridgeText}>Fridge</Text>
      <Image 
          style={styles.rectangleChalkBoard}        
          source = {require('../../android/app/src/img/rectangleMenu.png')}/>
      <Image 
        style={styles.chalkBoardIcon}          
        source = {require('../../android/app/src/img/chalkBoardIcon.png')}/>
      <Text style={styles.chalkBoardText}>Chalk Board</Text>
      <Image 
        style={styles.rectangleWallet}        
        source = {require('../../android/app/src/img/rectangleMenu.png')}/>
      <Image 
        style={styles.walletIcon}          
        source = {require('../../android/app/src/img/walletIcon.png')}/>
      <Text style={styles.walletText}>Wallet</Text>
      <Image 
        style={styles.rectangleCloneCalendar}        
        source = {require('../../android/app/src/img/rectangleMenu.png')}/>
      <Image 
        style={styles.cloneCalendarIcon}          
        source = {require('../../android/app/src/img/cloneCalendarIcon.png')}/>
      <Text style={styles.cloneCalendarText}>Clone Calendar</Text>
      <Image 
        style={styles.rectangleConnectTrybes}        
        source = {require('../../android/app/src/img/rectangleMenu.png')}/>
      <Image 
        style={styles.connectTrybesIcon}          
        source = {require('../../android/app/src/img/connectTrybesIcon.png')}/>
      <Text style={styles.connectTrybesText}>Connect Trybes</Text>
      <Text style={styles.titleText}>Other</Text>
      <Text style={{fontSize:13, fontWeight:'normal', marginLeft:'-70%'}}>Inivte Me</Text>
      <Image 
        style={styles.angleBracketRIcon}        
        source = {require('../../android/app/src/img/angleBracketRIcon.png')}/>
      <View
      style={styles.divider}/>
      <Text style={{fontSize:13, fontWeight:'normal', marginLeft:'-65%',marginTop:'1%'}}>Notifications</Text>
      <Image 
        style={styles.angleBracketRIcon}        
        source = {require('../../android/app/src/img/angleBracketRIcon.png')}/>
      <View
      style={styles.divider}/>
      <Text style={{fontSize:13, fontWeight:'normal', marginLeft:'-67%',marginTop:'1%'}}>Remind me</Text>
      <Image 
        style={styles.angleBracketRIcon}        
        source = {require('../../android/app/src/img/angleBracketRIcon.png')}/>
      <View
      style={styles.divider}/>
      <Text style={{fontSize:13, fontWeight:'normal', marginLeft:'-69%',marginTop:'1%'}}>Edit Trybe</Text>
      <Image 
        style={styles.angleBracketRIcon}        
        source = {require('../../android/app/src/img/angleBracketRIcon.png')}/>
      <View
      style={styles.divider}/>   
      
      
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
    marginBottom:1,  
    marginTop:'4%',
  },
  bigText:{
    fontSize:23,
    fontWeight: 'bold',
    marginLeft:'-70%',
    marginTop:'-10%',
    marginBottom:'8%',  
  },
  mumIcon:{
    marginLeft: '70%',
    marginTop: '-22%',
    
  },
  rectangleFridge:{
    marginLeft:'-45%',
    borderRadius: 8,
  },
  fridgeIcon:{
    marginLeft: '-70%',
    marginTop: '-24%',
  },
  fridgeText:{
    marginLeft: '-70%',
    marginTop: '5%',
    fontSize:15,
  },
  rectangleChalkBoard:{
    marginLeft:'45%',  
    marginTop:'-23%',  
    borderRadius: 8,
  },
  chalkBoardIcon:{
    marginLeft: '18%',
    marginTop: '-24%',
  },
  chalkBoardText:{
    marginLeft: '30%',
    marginTop: '5%',
    fontSize:15,
  },
  rectangleWallet:{
    marginLeft:'-45%', 
    marginTop:'6%',    
    borderRadius: 8,
  },
  walletIcon:{
    marginLeft: '-70%',
    marginTop: '-24%',
  },
  walletText:{
    marginLeft: '-70%',
    marginTop: '5%',
    fontSize:15,
  },
  rectangleCloneCalendar:{ 
    marginLeft:'45%', 
    marginTop:'-23%', 
    borderRadius: 8,
  },  
  cloneCalendarIcon:{
    marginLeft: '18%',
    marginTop: '-24%',
  },
  cloneCalendarText:{
    marginLeft: '35%',
    marginTop: '5%',
    fontSize:15,
  },
  
  rectangleConnectTrybes:{
    marginLeft:'-45%',   
    marginTop:'5%',  
    borderRadius: 8,
  },
  connectTrybesIcon:{
    marginLeft: '-65%',
    marginTop: '-24%',
  },
  connectTrybesText:{
    marginLeft: '-55%',
    marginTop: '5%',
    fontSize:15,
  },  
  titleText:{
    fontSize:23,
    fontWeight: 'bold',
    marginTop:'-15%',
    marginLeft:'-70%',
    paddingTop:'20%',
    marginBottom:'2%',  
  },
  divider:{
  borderBottomColor:'#E5E5E5',
  borderBottomWidth: 1,
  marginTop:'2%', 
  width:'100%',    
  },
  otherLinksText:{
    fontSize: 13,
    fontWeight: '500',
    //textDecorationLine: 'underline',
  },
  angleBracketRIcon:{
    marginLeft:'90%',
    marginTop:'-3%',
    

  },

});
export default Menu;