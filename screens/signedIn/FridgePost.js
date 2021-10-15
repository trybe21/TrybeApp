import 'react-native-gesture-handler';
import React, {Component ,useState} from 'react';
import {Image, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';



import { Header } from 'react-native-elements';


class FridgePost extends Component{

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
      height:'10%',
      }}
      />
      <Image
      style={styles.arrowIcon}        
      source = {require('../../android/app/src/img/arrowIcon.png')}/>
      <Text
      style={styles.bigText}>Fridge Posts</Text>
      <View
      style={styles.fridgePostBody}>
        <View
        style={styles.fridgePostContents}>
          <Image
           style={styles.profileIcon}        
           source = {require('../../android/app/src/img/mumIcon.png')}/>
           <View
           style={{flexDirection:'column', marginTop:'5%',}}>
           <Text style={styles.name}>Aybuke Pusat</Text>
           <Text style={styles.date}>Thursday 9 Aug, 2020</Text>
           </View>
           <Image
           style={styles.ellipsisHome}        
           source = {require('../../android/app/src/img/ellipsisHome.png')}/>
        </View>
        <View
        style={{marginLeft:'6%'}}>
          <Text
          style={{fontSize:11}}>Kizzy First Day at the School</Text>
        </View>
        <View style={{marginBottom:'6%'}}>
        <Image
           style={{marginTop:'3%',width:null}}        
           source = {require('../../android/app/src/img/fridgePostKizzy.png')}/>
        <Image
           style={{width:40, height:40, marginTop:'-13%', marginLeft:'3%'}}        
           source = {require('../../android/app/src/img/Ellipse51.png')}/>
        </View>
        <Text
        style={{marginLeft:'3%',}}>Comments</Text>
        <View style={styles.fridgePostComments}> 

        <View style={styles.fridgePostContents}>
        <Image
           style={styles.profileImage}        
           source = {require('../../android/app/src/img/mumFilterIcon.png')}/>
        <View style={styles.fridgePostComments}>
        <Text
        style={styles.comment}>Kizzy first day at school.</Text>
        <Text style={styles.date}> 9 Aug, 2020 </Text>        
        </View>  

        </View>
        <View style={styles.fridgePostContents}>
        <Image
           style={styles.profileImage}        
           source = {require('../../android/app/src/img/manFilterIcon.png')}/>
        <View style={styles.fridgePostComments}>
        <Text
        style={styles.comment}>She look cute.</Text>
        <Text style={styles.date}> 9 Aug, 2020 </Text>        
        </View>        
        </View>   
        <Text
        style={styles.moreComments}>1 more Comment </Text>   
        </View>
        <View style={styles.fridgePostContents}>
        <TextInput
        style={styles.commentInput}>Write a Comment</TextInput>
        <Image
           style={styles.sendIcon}        
           source = {require('../../android/app/src/img/purpleSendIcon.png')}/>

        </View>
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
    marginTop:'-12%',
  },
  arrowIcon:{
    marginTop: '-10%',
    marginLeft: '-83%',
  },
  bigText:{
    fontSize:23,
    fontWeight: 'bold',
    marginLeft:'-35%',  
    marginTop:'-7%',
  },
  fridgePostBody:{
    height: '75%',
    width:'100%',
    top:'5%',
    backgroundColor:'#ffffff'
  },
  fridgePostContents:{
    flexDirection:'row',
  },
  ellipsisHome:{
    marginLeft: '45%',
    marginTop:'6%',
  },
  profileIcon:{
    width:37,
    height:37,
    padding:'8%',
    marginTop:'3%',
    marginLeft:'3%',
  },
  name:{
    fontSize:15,
    fontWeight:'bold',
  },
  date:{
    fontSize:11,
    fontWeight:'400',
    color:'#7D7D7D'
  },
  fridgePostComments:{
    flexDirection:'column',
    marginBottom:10,
  },
  profileImage:{
    width:24,
    height:24,
    marginLeft:'3%',
    marginTop:'1%',
    margin:8,
    
  },
  comment:{
    fontSize:11,
    marginTop:'4%',
  },
  moreComments:{
    fontSize:11,
    textDecorationLine:'underline',
    marginLeft:'4%',
    color:'#7D7D7D',
  },
  commentInput:{
    fontSize:11,
    paddingLeft:16,
    color:'#7D7D7D',
    backgroundColor:'#FFFFFF',
    borderColor:'#EBEBEB',
    borderRadius: 18,
    borderWidth: 1,
    width:'90%',
    height:35,
    marginLeft:'4%',
  },
  sendIcon:{
    marginLeft:'-9%',
    marginTop:'2.5%',

  },
 
});
export default FridgePost;
