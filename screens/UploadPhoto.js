import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,  
} from 'react-native';


class UploadPhoto extends Component{
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
        <Text style={styles.bigText}>Add Profile Photo</Text>
        <Text style={styles.smallText}>If you don’t want to add profile photo now,</Text>
        <Text style={styles.smallText}>Don’t worry, you can add it later.</Text>
        <Image 
        style={styles.image}
        source = {require('../android/app/src/img/photoIcon.png')}/>
        <Image 
        style={styles.photoSelectContainer}
        source = {require('../android/app/src/img/photoSelectContain.png')}/>
        <View style={styles.uPPContainer}>
        <Text style={styles.uppText}>Upload Profile Photo</Text>
        <TouchableOpacity style={styles.chooseFGbutton}>
        <Text style={styles.buttonText}>Choose from Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.openCambutton}>
        <Text style={styles.oCbuttonText}>Open Camera</Text>
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
  },  
  arrowIcon:{
    marginTop: '10%',
    marginLeft: '-85%',
  },
  bigText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "bold",
    fontSize: 27,
  },
  smallText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "normal",
    fontSize: 11,
    top:'-1%',
    color:'#7D7D7D',
  },
  image:{
    top:'3%',
  },
  photoSelectContainer:{
    width: '100%',
    top: '20%',

  },
  uPPContainer:{
    backgroundColor:'#FFFFFF',
    width:412,
    height:205,
    borderTopLeftRadius:28,
    borderTopRightRadius:28,
    marginTop:'-20%',
  },
  uppText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "bold",
    fontSize: 15,
    marginTop:'5%',
    marginLeft:'7%',
  },
  chooseFGbutton: {    
    backgroundColor:'#841AFF',
    width: 350,
    height: 45,
    padding: 12,
    borderRadius: 8,
    alignSelf:'center',
    marginTop:10,
  },
  buttonText:{
    color:'#fff',
    alignSelf: "center",
    fontSize: 13,
  },
  openCambutton: {    
    backgroundColor:'#F1F1F1',
    width: 350,    
    padding: 12,
    borderRadius: 8,
    marginTop: '2%',
    height: 45,
    alignSelf:'center',
    
  },
  oCbuttonText:{
    color:'#000000',
    alignSelf: "center",
    fontSize: 13,
    fontWeight:'bold',

  },
  


  
  
});
export default UploadPhoto;