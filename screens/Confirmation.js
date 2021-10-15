import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,  
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'; 

class Confirmation extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }  
  render(){
    return (
      <View style={styles.body}>
        <Image
        style={styles.arrowIcon}        
        source = {require('../android/app/src/img/arrowIcon.png')}/>
        <Image 
        style={styles.image}
        source = {require('../android/app/src/img/emailIcon.png')}/>
        <Text style={styles.bigText}> Check your email</Text>  
        <Text style={styles.smallText}> To confirm your account, enter the 4 digit code send to </Text>
        <Text style={styles.smallText}> stevejobs@gmail.com </Text>
        <View style={{width:'100%', height:'100%', paddingTop:'1%'}}>
        <View style={styles.numerView}>
        <TextInput style={styles.n1}/>
        <TextInput style={styles.n2}/>
        <TextInput style={styles.n3}/>
        <TextInput style={styles.n4}/>
        </View>
        <TouchableOpacity style={styles.submitbutton}>
        <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resendcodebutton}>
        <Text style={styles.buttonTextrc}>Resend Code</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    paddingTop:1,
    paddingBottom:1
  },
  arrowIcon:{
    marginTop: '70%',
    marginLeft: '-85%',
  },
  image:{
    marginTop:'20%',
  },
  bigText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "normal",
    fontSize: 17,
    
  },
  smallText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "normal",
    fontSize: 10,
    
  },
  numerView:{
    flexDirection:'row',
    justifyContent: 'center',
    marginTop:'8%',
    
  },
  n1: {
    width: '10%',
    height: 50,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5, 
    fontSize: 16, 
    
  }, 
  n2: {
    width: '10%',
    height: 50,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5, 
    fontSize: 16,
    marginLeft:10
  }, 
  n3: {
    width: '10%',
    height: 50,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5, 
    fontSize: 16,
    marginLeft:10
  }, 
  n4: {
    width: '10%',
    height: 50,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5, 
    fontSize: 16,
    marginLeft:10
  }, 
  submitbutton: {    
    backgroundColor:'#841AFF',
    width: 350,
    padding: 10,
    borderRadius: 8,
    marginTop: '6%',
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
  },
  resendcodebutton: {    
    backgroundColor:'#F1F1F1',
    width: 350,
    padding: 10,
    borderRadius: 8,
    marginTop: '6%',
  },
  buttonTextrc: {
    color: "black",
    alignSelf: "center",
  },
  
});
export default Confirmation;