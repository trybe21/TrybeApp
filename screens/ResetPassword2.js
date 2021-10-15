import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,  
} from 'react-native';



class ResetPassword2 extends Component{
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
        <Text style={styles.bigText}>Create New Password</Text>
        <Text style={styles.smallText}>Please enter your Email associated with this</Text>
        <Text style={styles.smallText}>account, we will send the link to reset your</Text>
        <Text style={styles.smallText}>password.</Text>
        <TextInput style={styles.newpassword} placeholder="New Password" />
        <TextInput style={styles.confirmpassword} placeholder="Confirm Password" />
        <TouchableOpacity style={styles.sendlinkbutton}>
        <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
        <Text style={styles.bottomText}>Try another Way.</Text>  
                   
        


        
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
    marginTop:'1%',
    left:'-40%', 
  },
  bigText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "bold",
    fontSize: 27,
    marginTop:'10%',
  },
  smallText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "normal",
    fontSize: 12,
    color:'#7D7D7D',
  },
  newpassword: {
    width: 350,
    height: '8%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 9, 
    fontSize: 16,
    marginTop:'10%',
    borderBottomColor: 'transparent',
  },
  confirmpassword: {
    width: 350,
    height: '8%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 9, 
    fontSize: 16,
    borderTopColor: 'transparent',
  },
  sendlinkbutton: {    
    backgroundColor:'#841AFF',
    width: 350,
    height:'7%',
    padding: 10,
    borderRadius: 8,
    marginTop:'10%',
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
  },
  bottomText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "normal",
    fontSize: 12,
    marginTop:'45%',
    textDecorationLine:'underline',
  },

});
export default ResetPassword2;