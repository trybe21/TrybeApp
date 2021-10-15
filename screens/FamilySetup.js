import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

class FamilySetup extends Component{
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
        <Text style={styles.bigText}>Complete Your Tribe</Text>
        <Text style={styles.smallText}>You complete your family profile by inviting</Text>
        <Text style={styles.smallText}>the Partner & add the information of your</Text>
        <Text style={styles.smallText}>childrens</Text>
        <View style={{flexDirection:'row',alignItems:'center', marginLeft:30, marginTop:10}}>
        <Image 
        style={styles.imagemum}
        source = {require('../android/app/src/img/mumIcon.png')}/>
        <Text style={styles.mumText}> Mum </Text>        
        <Image 
        style={styles.imagedad}
        source = {require('../android/app/src/img/dadIcon.png')}/>
        <Text style={styles.dadText}> Dad </Text>
        <Image 
        style={styles.imagechild}
        source = {require('../android/app/src/img/childIcon.png')}/>
        <Text style={styles.childText}> Child </Text>
        
        </View>
        <Text style={styles.skipText}>Skip</Text>
        <Image 
        style={styles.nextbuttonimage}
        source = {require('../android/app/src/img/nextbuttonIcon.png')}/>
        

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
    marginTop: '1%',
    marginLeft: '-85%',
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
    fontSize: 11,
    marginTop:'1%',
    color:'#7D7D7D',
  },
  imagemum:{
    marginTop:'-1%',
    marginLeft:'-15%',
    
  },  
  imagedad:{
    marginTop:'-1%',
    marginLeft:'10%',
    
  },  
  imagechild:{
    marginTop:'-1%',
    marginLeft:'10%',
    
  },
  mumText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
    paddingTop:'15%',
    marginLeft:'-15%',
  },
  dadText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
    paddingTop:'15%',
    marginLeft:'-12%'
    
  },
  childText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
    paddingTop:'15%',
    marginLeft:'-17%'
  },  
  skipText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "normal",
    fontSize: 15,
    color: '#841AFF',
    marginTop:'73%',
    marginLeft:'-85%',
  },  
  nextbuttonimage:{
    marginTop:'-6%',
    marginLeft:'85%',
  },
  
});
export default FamilySetup;