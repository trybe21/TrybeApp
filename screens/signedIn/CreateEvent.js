import 'react-native-gesture-handler';
import React, {Component ,useState} from 'react';
import {ScrollView, Image, Text, View, StyleSheet, TextInput, TouchableOpacity, Switch} from 'react-native';



import { Header } from 'react-native-elements';

import CategoriesMenu from '../../components/CategoriesMenu';
import Post from '../../components/Post';



class CreateEvent extends Component{
    


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
      height:'15%',
      }}
      />
      
      
      <Image
      style={styles.arrowIcon}        
      source = {require('../../android/app/src/img/arrowIcon.png')}/>
      <Text style={styles.bigText}>Add Title</Text>

      
      <ScrollView>
      <Text style={styles.categoryTitle}>Schedule</Text>
      <View style={styles.row}>
      <Text style={styles.scheduleText}>All Days</Text>
      <Switch
      style={styles.switch}
      trackColor={{ false: "#841AFF", true: "#841AFF" }}
      />
      </View>
      <View style={styles.row}>
      <Text style={styles.scheduleText}>Start Time</Text>
      <Text style={styles.dateText}>Tuesday, Sep 29</Text>
      <Text style={styles.dateText}>1:30 AM</Text>
      </View>
      <View style={styles.row}>
      <Text style={styles.scheduleText}>End Time</Text>
      <Text style={styles.dateText}>Tuesday, Sep 29</Text>
      <Text style={styles.dateText}>2:30 AM</Text>
      </View>
      <View style={styles.row}>
      <Text style={{fontSize:13, marginLeft: '3%',}}>Repeat</Text>
      <Text style={{fontSize:12, marginLeft:'65%' }}>Every Day</Text>
      <Image
      style={styles.angleBracketRight}        
      source = {require('../../android/app/src/img/angleBracketRIcon.png')}/>
      </View>
      <Text style={styles.categoryTitle}>Category</Text>
      <View style={{flexDirection:'row', justifyContent:'space-around' , width:260, height:5, marginLeft:-90}}>
      <TouchableOpacity style={styles.mealsbutton}>
      <Image
      style={styles.categoryImages}        
      source = {require('../../android/app/src/img/mealsIcon.png')}/>
      <Text style={styles.categoryText}>Meals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appointmentsbutton}>
      <Image
      style={styles.categoryImages}        
      source = {require('../../android/app/src/img/appointmentsIcon.png')}/>
      <Text style={styles.categoryText}>Appointments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.educationbutton}>
      <Image
      style={styles.categoryImages}        
      source = {require('../../android/app/src/img/educationIcon.png')}/>
      <Text style={styles.categoryText}>Education</Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.categoryTitle}>Responsible</Text>
      
      <View style={{flexDirection:'row', justifyContent:'space-around' , width:260, height:40, marginLeft:-90}}>
      <TouchableOpacity style={styles.mumbutton}>
      <Image
      style={styles.categoryImages}        
      source = {require('../../android/app/src/img/mumEventIcon.png')}/>
      <Text style={styles.categoryText}>Mum</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dadbutton}>
      <Image
      style={styles.categoryImages}        
      source = {require('../../android/app/src/img/dadEventIcon.png')}/>
      <Text style={styles.categoryText}>Dad</Text>
      </TouchableOpacity>        
      </View>
      <Text style={styles.categoryTitle}>Location</Text>
      <View>
      <TouchableOpacity style={styles.searchLocation}>
      <Image
      style={{marginLeft:10, marginTop:10}}        
      source = {require('../../android/app/src/img/searchIcon.png')}/>
      <Text style={styles.searchLocationTxt}>Search location</Text>
      <Image
      style={{marginLeft:310,marginTop:-16 }}        
      source = {require('../../android/app/src/img/mapPinIcon.png')}/>
      </TouchableOpacity>
      </View>
      <Text style={styles.categoryTitle}>Description</Text>
      <TextInput style={styles.detailOfEvent} placeholder="Enter Detail of Event."></TextInput>   
      <Text style={styles.categoryTitle}>Attachments</Text>  
      <TouchableOpacity style={styles.uploadfileButton}>
      <Text style={styles.uploadfileText}>Upload File</Text>
      </TouchableOpacity>
      <View style={styles.row}>
      <Text style={{fontSize:13, marginLeft: '3%',}}>Remind</Text>
      <Text style={{fontSize:12, marginLeft:'58%' }}>15 min before</Text>
      <Image
      style={styles.angleBracketRight}        
      source = {require('../../android/app/src/img/angleBracketRIcon.png')}/>
      </View>
      <TouchableOpacity style={styles.createButton}>
      <Text style={styles.createText}>Create</Text>
      </TouchableOpacity>

      </ScrollView>
      
      
      
      
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
    marginTop: '-20%',
    marginLeft: '-85%',
  },
  bigText:{
    fontSize:19,
    fontWeight: 'bold',
    marginLeft:'-70%',  
    marginTop:'5%',  
  },
  categoryTitle:{
    fontSize:15,
    fontWeight:'bold',
    marginLeft:'3%',  
    paddingTop:30,
    paddingBottom:10,
  },
  row:{
    width:'100%',
    flexDirection:'row',
    marginTop:30,
  },
  scheduleText:{
    fontSize:13,    
    marginLeft:'3%', 
    marginRight:'36%', 
  },
  switch:{
   marginLeft:'36%', 
  },
  dateText:{
    fontSize:12,    
    marginLeft:'4%', 
    marginTop:-1,
  },
  angleBracketRight:{
    marginLeft:'3%', 
    marginTop:3,
  },
  mealsbutton: {    
    flexDirection:'row',
    backgroundColor:'#FFFFFF',
    width: '35%',
    height: 30,
    borderRadius: 8,
    alignItems:'center',
    marginLeft:'120%', 
  },
  appointmentsbutton: {    
    flexDirection:'row',
    backgroundColor:'#FFFFFF',
    width: '50%',
    height: 30,
    borderRadius: 8,
    alignItems:'center',
    marginLeft:'170%', 
  },
  educationbutton: {    
    flexDirection:'row',
    backgroundColor:'#FFFFFF',
    width: '45%',
    height: 30,
    borderRadius: 8,
    alignItems:'center',
    marginLeft:'170%', 
  },
  categoryImages:{
    marginLeft:'10%',

  },
  categoryText:{
    fontSize:13,
    color:'#000000',
    alignSelf: "center",
    marginLeft:'3%', 
  },
  mumbutton: {    
    flexDirection:'row',
    backgroundColor:'#FFFFFF',
    width: '45%',
    height: 40,
    borderRadius: 8,
    alignItems:'center',
    marginLeft:'70%', 
  },
  dadbutton: {    
    flexDirection:'row',
    backgroundColor:'#FFFFFF',
    width: '45%',
    height: 40,
    borderRadius: 8,
    alignItems:'center',
    marginLeft:'75%', 
  },
  searchLocation:{
    backgroundColor:'#FFFFFF',
    width: '85%',
    height: 40,
    marginLeft:'5%', 
    borderRadius: 8,

  },
  searchLocationTxt:{
    fontSize:11,
    marginLeft:50,
    marginTop:-20,
  },
  detailOfEvent:{
    backgroundColor:'#FFFFFF',
    width: '85%',
    height: 134,
    marginLeft:'5%', 
    borderRadius: 8,
    textAlignVertical:'top',
  },
  uploadfileButton:{
    backgroundColor:'#FFFFFF',
    width: '85%',
    height: 45,
    marginLeft:'5%', 
    borderRadius: 8,
    textAlignVertical:'top',

  },
  uploadfileText:{
    alignSelf:'center',
    fontSize:13,
    marginTop:'5%', 
  },
  
  createButton:{
    backgroundColor:'#841AFF',
    width: '85%',
    height: 45,
    marginLeft:'5%', 
    borderRadius: 8,
    textAlignVertical:'top',
    marginTop:'8%',

  },
  createText:{
    alignSelf:'center',
    fontSize:13,
    marginTop:'5%', 
    color:'#FFFFFF',

  },
  
});
export default CreateEvent;
