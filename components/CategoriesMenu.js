import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'; 




class CategoriesMenu extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }
  
  render(){
    return (
      
      <ScrollView 
      horizontal
      style={{flexDirection:'row'}}>
          <TouchableOpacity
          style={styles.touchableOpacityCate}>
          <Text style={styles.scrollViewCate}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.touchableOpacityCate}>
          <Text style={styles.scrollViewCate}>Education</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.touchableOpacityCate}>
          <Text style={styles.scrollViewCate}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.touchableOpacityCate}>
          <Text style={styles.scrollViewCate}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.touchableOpacityCate}>
          <Text style={styles.scrollViewCate}>Hobbies</Text>
          </TouchableOpacity>
          

      </ScrollView>
      
    ) 
  }
}
const styles = StyleSheet.create({
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

});
export default CategoriesMenu;