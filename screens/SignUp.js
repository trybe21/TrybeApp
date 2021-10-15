import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';

class SignUp extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }  
  render(){
    return (
        <View style={styles.body}>
        <Text style={styles.trybetext}> trybe </Text>
        <Text style={styles.nyoftext}>Not Your Ordinary Family</Text>
        <TextInput style={styles.username} placeholder="Username" />
        <TextInput style={styles.email} placeholder="Email"/>
        <TextInput style={styles.password} placeholder="Password"/>
        
         
        <TouchableOpacity style={styles.createAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        
        
        <Text style={styles.bottomText}> By tapping “Create Account”, You will accept all </Text>
        <Text style={styles.bottomText}> Terms & Conditions and Privacy & Policy. </Text>
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
  trybetext: {
    
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: "bold",//800 UI but 700 RN 
    fontSize: 57,
    lineHeight: 68,
    top: '-11%',
    color:'#841AFF',            
  },
  nyoftext: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal', 
    fontSize: 13,  
    top: '-11%',
    color:'#000000', 
  },
  username: {
    width: 350,
    height: '8%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 9, 
    fontSize: 16,
    top: '1%',
    borderBottomColor: 'transparent',
  },  
    email:{
    width: 350,
    height: '8%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 9, 
    fontSize: 16,
    top: '1%',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
    password: {
    width: 350,
    height: '8%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 9, 
    fontSize: 16,
    top: '1%',
    borderTopColor: 'transparent',
  },
  createAccount: {    
    backgroundColor:'#841AFF',
    width: 350,
    padding: 10,
    borderRadius: 8,
    top: '5%',
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
  },
  bottomText: {

    top: '18%',
    
  }
  
  
  
});
export default SignUp;