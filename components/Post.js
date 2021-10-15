import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  View,
} from 'react-native'; 




class Post extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }
  
  render(){
    return (
      
      <View style={styles.viewRecentP}>
        
      <View style={styles.postChalkBoard}>
      <Image
      style={styles.userPostIcon}        
      source = {require('../android/app/src/img/aybukePIcon.png')}/>
      <Text style={styles.userName}>Aybuke Pusat</Text>
      <Text style={styles.dateUserPost}>Thursday 9 Aug, 2020</Text>
      <Image
      style={styles.ellipsisOptions}        
      source = {require('../android/app/src/img/ellipsisHome.png')}/>
      <Text
      style={styles.usersPost}>Hello Mums, My 2 year child have the stomach problem. Please recommend me child specialist doctor. #help #child #medical</Text>
      <Text
      style={styles.moreComments}>24 Comments</Text>   
      </View>
      <View style={{width:'100%'}}>
      <TextInput
      style={styles.commentInput}>Write a Comment</TextInput>
      <Image
         style={styles.sendIcon}        
         source = {require('../android/app/src/img/purpleSendIcon.png')}/>

      </View>
      
      </View>
    
  ) 
}
}
const styles = StyleSheet.create({
  viewRecentP:{
      alignItems: 'center',
    },
    postChalkBoard:{
      height: '65%',
      width:'100%',
      top:'5%',
      backgroundColor:'#ffffff'
    },
    userPostIcon:{
      marginLeft: '5%',
      marginTop:'5%',
    },
    userName:{
      marginLeft: '17%',
      marginTop:'-9%',
      marginBottom:'3%',
      fontSize:15,
      
    },
    dateUserPost:{
      marginLeft: '17%',
      marginTop:'-3%',
      fontSize:11,
      color:'#7D7D7D',
    },
    ellipsisOptions:{
      marginLeft: '90%',
      marginTop:'-8%',
      marginBottom:'3%',
    },
    usersPost:{
      fontSize:11,
      marginLeft: '6%',
      marginTop:'8%',
      marginBottom:'1%',
    },
    moreComments:{
      fontSize:11,
      textDecorationLine:'underline',
      marginLeft:'6%',
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
      width:'95%',
      height:35,
      marginLeft:'3%',
      marginTop:'-10%',
    },
    sendIcon:{
      marginLeft:'90%',
      marginTop:'-7%',
  
    },

});
export default Post;