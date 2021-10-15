import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,  
} from 'react-native';


class SyncingCalender extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }  
  render(){
    return (
      <View style={styles.body}>
        <Image 
        style={styles.arrowicon}
        source = {require('../android/app/src/img/arrowIcon.png')}/>              
        <Text style={styles.bigText}>Sync Calender</Text>
        <Text style={styles.smallText}>Now You can also sync your Trybe Calender</Text>
        <Text style={styles.smallText}>with Google calender. And</Text>
        <Text style={styles.smallText}>export your created events.</Text>
        <TouchableOpacity style={styles.syncgooglebutton}>
        <Text style={styles.buttonText}>Sync Google Calender</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelfornowbutton}>
        <Text style={styles.cfnbuttonText}>Cancel For Now</Text>
        </TouchableOpacity>


        
        </View>
    ) 
  }
  
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center', 
    justifyContent: 'center',
  },  
    arrowicon:{    
    top:'-28%',
    left:'-40%', 
  },
  bigText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "bold",
    fontSize: 27,
    top:'-28%',
  },
  smallText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "normal",
    fontSize: 12,
    top:'-26%',
    color:'#7D7D7D',
  },
  syncgooglebutton: {    
    backgroundColor:'#841AFF',
    width: 350,
    height:'7%',
    padding: 10,
    borderRadius: 8,
    top: '-13%',
  },
  cancelfornowbutton: {    
    backgroundColor:'#F1F1F1',
    width: 350,
    height:'7%',
    padding: 10,
    borderRadius: 8,
    top: '-10%',
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
  },
  cfnbuttonText: {
    color: '#000000',
    alignSelf: "center",
  },

});
export default SyncingCalender;