import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
  View,
} from 'react-native'; 




class FridgeFilter extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }
  
  render(){
    return (
      
      <View style={styles.FridgeFilterBody}>
      <Text 
      style={styles.bigText}>Filter Via</Text>
      <Text
      style={styles.categoryTitle}>Profile</Text>
      
      <View
      style={styles.filterRow}>
      <TouchableOpacity>
      <Image
      style={styles.profileIcons}   
      source = {require('../android/app/src/img/mumFilterIcon.png')}/>      
      </TouchableOpacity>
      <TouchableOpacity>
      <Image
      style={styles.profileIcons}   
      source = {require('../android/app/src/img/manFilterIcon.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image
      style={styles.profileIcons}   
      source = {require('../android/app/src/img/kizzyFilterIcon.png')}/>
      </TouchableOpacity>      
      </View>

      <Text
      style={styles.categoryTitle}>Tags</Text>
      
      <View>
      <ScrollView
      horizontal
      style={{paddingTop:20, paddingBottom:-50}}>
      <TouchableOpacity
          style={styles.touchableOpacityCate}>
          <Text style={styles.scrollViewCate}>Education</Text>
      </TouchableOpacity>  
      <TouchableOpacity
          style={styles.touchableOpacityCate}>
          <Text style={styles.scrollViewCate}>Birthday</Text>
      </TouchableOpacity>  
      <TouchableOpacity
          style={styles.touchableOpacityCate}>
          <Text style={styles.scrollViewCate}>Holidays</Text>
      </TouchableOpacity>   
      <TouchableOpacity
          style={styles.touchableOpacityCate}>
          <Text style={styles.scrollViewCate}>Events</Text>
      </TouchableOpacity>        
      </ScrollView>
      </View>

      <Text
      style={styles.categoryTitle}>Date</Text>

      <View style={{flexDirection:'row'}}>
          <TouchableOpacity
          style={styles.touchableOpacityDate}>
              <Text
              style={styles.dateText}>From</Text>
              <Image
              style={styles.calendar}   
              source = {require('../android/app/src/img/calenderIcon.png')}/>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.touchableOpacityDate}>
              <Text
              style={styles.dateText}>To</Text>
              <Image
              style={styles.calendar}   
              source = {require('../android/app/src/img/calenderIcon.png')}/>
          </TouchableOpacity>
      </View>
      <View style={styles.button}>
      <TouchableOpacity style={styles.resetbutton}>
          <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.applybutton}>
          <Text style={styles.applyText}>Apply</Text>
      </TouchableOpacity>
      </View>
        
     
      </View>
    
  ) 
}
}
const styles = StyleSheet.create({
  FridgeFilterBody:{
      backgroundColor:'#FFFFFF',
      width:412,
      height:458,
      borderTopLeftRadius:28,
      borderTopRightRadius:28,
  },
  bigText:{
      fontSize:17,
      fontFamily:'SF Pro Text',
      fontWeight: 'bold',
      paddingLeft:20,
      paddingTop:20,
  },
  categoryTitle:{
      fontSize:11,
      paddingLeft:20,
      paddingTop:20,
  },
  filterRow:{
      flexDirection:'row',
      
      paddingTop:20,
  },
  profileIcons:{
      width:40,
      height:40,
      marginLeft:20,
  },
  scrollViewCate: {
    marginHorizontal: 20,
    fontSize:11,   
    marginTop:5,
  },
  touchableOpacityCate:{
    backgroundColor: '#F1F1F1',
    borderRadius:15,
    height:29,
    marginTop:10,
    marginHorizontal:1,
    marginLeft:15
  },
  dateText:{
      fontSize:11,
      paddingTop:6,
      paddingLeft:10,
  },
  touchableOpacityDate:{
    backgroundColor: '#F1F1F1',
    borderRadius:15,
    height:29,
    width:120,
    marginTop:10,
    marginHorizontal:1,
    marginLeft:15,
  },
  calendar:{
      marginLeft:'80%',
      marginTop:'-11%',
      width:12.35,
      height:14,
  },
  button:{
    flexDirection:'column',
    alignItems:'center',
    width:'100%',
    height:'100%',
    paddingTop:20,
  },
  resetbutton: {
    backgroundColor:'#F1F1F1',
    width: '90%',
    height: '10%',
    borderRadius: 6,
    alignItems:'center',
    justifyContent:'center',  
    marginBottom:15,    
  },
  applybutton: {    
    flexDirection:'row',
    backgroundColor:'#841AFF',
    width: '90%',
    height: '10%',
    borderRadius: 6,
    alignItems:'center',
    justifyContent:'center', 
  },
  resetText:{
    fontSize:13,
    alignSelf: "center",
    fontWeight:'bold',
  },
  applyText:{
    fontSize:13,
    fontWeight:'bold',
    color:'#ffff',
    alignSelf: "center",

  },

});
export default FridgeFilter;