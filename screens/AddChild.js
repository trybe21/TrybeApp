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
 
import SplashScreen from 'react-native-splash-screen';

class AddChild extends Component{
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
        <Text style={styles.bigText}>Add Dependant</Text>
        <Text style={styles.smallText}>Please add your dependant photo, name,</Text>
        <Text style={styles.smallText}>DOB, gender, And you can add other details</Text>
        <Text style={styles.smallText}>later.</Text>
        <Image 
        style={styles.childPhoto}
        source = {require('../android/app/src/img/childphotoIcon.png')}/>
        <Image 
        style={styles.camBackground}
        source = {require('../android/app/src/img/camBIcon.png')}/>
        <Image 
        style={styles.camForeground}
        source = {require('../android/app/src/img/camFIcon.png')}/>
       <Text style={styles.nameTxt}>Name</Text>   
        <TextInput style={styles.nameInput}/>  
        <Text style={styles.dobTxt}>Date of Birth</Text>   
        <TextInput style={styles.dobInput}/>  
        <Image 
        style={styles.calender}
        source = {require('../android/app/src/img/calenderIcon.png')}/>
        <Text style={styles.genderTxt}>Gender</Text>
        <TouchableOpacity style={styles.malebutton}></TouchableOpacity>
        <Text style={styles.buttonTextM}>Male</Text>
        <TouchableOpacity style={styles.femalebutton}></TouchableOpacity>        
        <Text style={styles.buttonTextF}>Female</Text>
        <TouchableOpacity style={styles.updatechildbutton}></TouchableOpacity>
        <Text style={styles.buttonTextUC}>Update Child Profile</Text>
  
        
        
        
        
        
        
        
        </View>
    ) 
  }
  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
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
    marginTop:'-10%',
    marginLeft: '85%',
  },
  bigText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "bold",
    fontSize: 27,
    marginTop:'1%',
  },
  smallText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "normal",
    fontSize: 12,
    marginTop:'-1%',
    color:'#7D7D7D',
  },
  childPhoto:{
    marginTop: '1%',    

  },
  camBackground:{
    marginTop: '-23%',
    marginLeft: '15%',
  },
  camForeground:{
    marginTop: '-5%',
    marginLeft: '15%',
  },
  nameTxt:{
    fontFamily: 'SF Pro Text',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: '-76%',
    marginTop: '25%',
    
  },
  nameInput: {
    width: 350,
    height: '8%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 9, 
    fontSize: 16,
    marginTop: '2%',
  },
  dobTxt:{
    fontFamily: 'SF Pro Text',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: '-68%',
    marginTop: '1%',
    
  },
  dobInput: {
    width: 350,
    height: '8%',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 9, 
    fontSize: 16,
    marginTop: '2%',
  },
  genderTxt:{
    fontFamily: 'SF Pro Text',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: '-76%',
    marginTop: '7%',
    
  },
  calender:{
    marginLeft: '65%',
    marginTop: '-10%',

  },
  malebutton:{
    backgroundColor:'#FFFFFF',
    width: 160,
    height:'7%',
    padding: 10,
    borderRadius: 8,
    marginTop: '2%',
    marginLeft: '-45%',    
  },
  femalebutton:{
    backgroundColor:'#FFFFFF',
    width: 160,
    height:'7%',
    padding: 10,
    borderRadius: 8,
    marginTop: '-7%', 
    marginLeft: '45%',   
  },
  buttonTextM: {
    color: "black",
    alignSelf: "center",
    marginTop:'-9%',
    marginLeft: '-45%',
  },
  buttonTextF: {
    color: "black",
    alignSelf: "center",
    marginTop:'-9%',
    marginLeft: '45%',
  },
  updatechildbutton:{
    backgroundColor:'#841AFF',
    width: 350,
    height:'7%',
    padding: 10,
    borderRadius: 8,
    marginTop: '12%',   
  },
  buttonTextUC: {
    color: "white",
    alignSelf: "center",
    marginTop:'-9%',
  },

});
export default AddChild;