import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,  
} from 'react-native';

class InviteDad extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }  
  render(){
    return (
      <View style={styles.body}>
        <Image 
        style={styles.closeicon}
        source = {require('../android/app/src/img/xIcon.png')}/>
        <Text style={styles.bigText}>Invite Dad</Text>
        <Text style={styles.smallText}>Add Husband / Children’s Dad by inviting him through email,</Text>
        <Text style={styles.smallText}>When he accepts your invitation,</Text>
        <Text style={styles.smallText}>He would be registered as Dad.</Text>
        <TextInput style={styles.email} placeholder="Enter the Email" />
        <TouchableOpacity style={styles.sendinvitebutton}>
        <Text style={styles.buttonText}>Send Invite</Text>
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
    closeicon:{    
      marginTop:'-70%',
    marginLeft: '81%',
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
    marginTop:'-1%',
    color:'#7D7D7D',
  },
  email: {
    width: 350,
    height: '8%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 9, 
    fontSize: 16,
    marginTop:'5%',
    
  },  
  sendinvitebutton: {    
    backgroundColor:'#841AFF',
    width: 350,
    height:'7%',
    padding: 10,
    borderRadius: 8,
    marginTop:'5%',
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
  },
  
});
export default InviteDad;