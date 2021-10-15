import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'; 
import SplashScreen from 'react-native-splash-screen';

class SignIn extends Component{
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
      <TextInput style={styles.username} placeholder="Email or Username" />
      <TextInput style={styles.password} placeholder="Password"/>
      <CheckBox
      value={false}
      disabled={false}
      style={styles.checkbox}
      />
      <Text style={styles.rememberme}>Remember Me</Text>
      <Text style={styles.forgetpassword}> Forget Your Password? </Text>
      <TouchableOpacity style={styles.loginbutton}>
      <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginbuttongoogle}>
      <Text style={styles.buttonTextgoogle}>Sign In with Google</Text>
      </TouchableOpacity>
      <Image 
        style={styles.googleIcon}
        source = {require('../android/app/src/img/googleIcon.png')}/>
      <TouchableOpacity style={styles.loginbuttonfacebook}>
      <Text style={styles.buttonText}>Sign In with Facebook</Text>
      <Image 
        style={styles.facebookIcon}
        source = {require('../android/app/src/img/facebookIcon.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginbuttonapple}>
      <Text style={styles.buttonText}>Sign In with Apple</Text>
      <Image 
        style={styles.appleIcon}
        source = {require('../android/app/src/img/appleIcon.png')}/>
      </TouchableOpacity>
      <Text style={styles.text}>Do not have an account? CreateAccount</Text>
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
    paddingBottom:1,
  },
  trybetext: {    
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: "bold",//800 UI but 700 RN 
    fontSize: 57,
    lineHeight: 68,
    top: '-1%',
    color:'#841AFF',            
  },
  nyoftext: {
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal', 
    fontSize: 13,  
    top: '-1%',
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
    top: '9%',
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
    top: '9%',
    borderTopColor: 'transparent',
  }, 
  checkbox: {
    flexDirection: "row",
    marginBottom: 20,
    alignSelf: "center",
    margin: 8,
    top: '12%',
    left: '-25%',  
  },
  rememberme: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontSize: 14,  
    top: '0.2%',
    color:'#000000',
    left: '-25%',
    
  },
  forgetpassword: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontSize: 14,  
    top: '-2.5%',
    color:'#000000',
    left: '24%',   
  },
  loginbutton: {    
    backgroundColor:'#841AFF',
    width: 350,
    height: '7%',
    padding: 10,
    borderRadius: 8,
    top: '1%',
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
  },
  loginbuttongoogle: {    
    backgroundColor:'#FFFFFF',
    width: 350,
    height: '7%', 
    padding: 10,
    borderRadius: 8,
    top: '7%',
  },
  buttonTextgoogle: {
    color: "black",
    alignSelf: "center",
    top: '7%',
  },
  googleIcon:{
    top: '2%',
    left: '-35%',

  },
  loginbuttonfacebook: {    
    backgroundColor:'#2D7CFF',
    width: 350,
    height: '7%',    
    padding: 10,
    borderRadius: 8,
    top: '6%',
  },
  facebookIcon:{
    top: '-60%',
    left: '5%',
  },
  loginbuttonapple: {    
    backgroundColor:'#000000',
    width:350,
    height: '7%', 
    padding: 10,
    borderRadius:8,
    top: '7%',
  },  
  appleIcon:{
    top: '-60%',
    left: '5%',
  },
  text: {
    top: '10%',
  }
  
  
  
});
export default SignIn;