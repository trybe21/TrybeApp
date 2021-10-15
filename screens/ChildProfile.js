import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import {Card} from 'react-native-elements';

class ChildProfile extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }    
  }
  render(){
    return (
      <View style={styles.body}>  
        <Image 
        style={styles.backarrow}
        source = {require('../android/app/src/img/arrowIcon.png')}/>                  
        <Image 
        style={styles.imageEllipse51}
        source = {require('../android/app/src/img/Ellipse51.png')}/>
        <Text
        style={styles.nametext}>Kizzy</Text>
        <Text
        style={styles.dobtext}>18 March, 2013</Text>
        <Text
        style={styles.age}>8 years old</Text>
        <Text
        style={styles.measurementsText}>Measurements</Text>

        <View style={styles.cardRow}>
        <Card containerStyle={styles.cardMeasurements}>
         <Card.Title
         style={styles.cardtitle}>Shoe Size</Card.Title>
         <Text style={styles.cardtext}>7</Text>
        </Card>
        <Card containerStyle={styles.cardMeasurements}>
         <Card.Title
         style={styles.cardtitle}>Pent Size</Card.Title>
         <Text style={styles.cardtext}>32</Text>
        </Card>
        <Card containerStyle={styles.cardMeasurements}>
         <Card.Title
         style={styles.cardtitle}>Top Size</Card.Title>
         <Text style={styles.cardtext}>32</Text>
        </Card>
        </View>
        <Text
        style={styles.pIText}>Personal Information</Text>

        <View style={styles.cardRow2}>
        <Card containerStyle={styles.cardPersonalInfo}>
         <Card.Title
         style={styles.cardtitlePI}>Diet</Card.Title>
         <Text style={styles.cardtextPI}>Milk without Fat</Text>
        </Card>
        <Card containerStyle={styles.cardPersonalInfo}>
         <Card.Title
         style={styles.cardtitlePI}>Allergies</Card.Title>
         <Text style={styles.cardtextPI}>Pollens</Text>
         <Text style={styles.cardtextPI}>Purfume</Text>
        </Card>       
        </View>
        <View style={styles.cardRow2}>
        <Card containerStyle={styles.cardPersonalInfo}>
         <Card.Title
         style={styles.cardtitlePI}>Likes</Card.Title>
         <Text style={styles.cardtextPI}>Milk</Text>
         <Text style={styles.cardtextPI}>Banana Shake</Text>
        </Card>
        <Card containerStyle={styles.cardPersonalInfo}>
         <Card.Title
         style={styles.cardtitlePI}>Dislikes</Card.Title>
         <Text style={styles.cardtextPI}>Parsley</Text>
         <Text style={styles.cardtextPI}>Cricket</Text>
        </Card>
        </View>
        <View>
        <Card containerStyle={styles.cardPersonalInfo2}>
         <Card.Title
         style={styles.cardtitlePI}>Imortant Notes</Card.Title>
         <Text style={styles.cardtextPI}>Kizzy do not sleep without listening at least one story.</Text>
        </Card>
        </View>
        <Text
        style={styles.pIText}>Personal Information</Text>
        <View>
        <Card containerStyle={styles.cardPersonalInfo3}>
        <Text style={styles.cardtextPI}>Birth Form</Text>
        <Image 
        style={styles.imageShare}        
        source = {require('../android/app/src/img/share.png')}/>
        <Image 
        style={styles.imageDownload}        
        source = {require('../android/app/src/img/download.png')}/> 
        </Card>
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
    resizeMode: 'contain',
    paddingTop:95,
    paddingBottom:1,     
  },
  bigText:{
    flex: 1,
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "bold",
    fontSize: 27,
    top:'-15%',
    color:'#841AFF',
  },
  smallText:{
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal', 
    fontWeight: "normal",
    fontSize: 12,
    top:'-15%',
    color:'#7D7D7D',
  },
  backarrow:{
    alignContent: "center",
   //paddingTop: -25,
    marginLeft: '-85%',
    resizeMode: 'contain',
    top: '-10%',
  },
  imageEllipse51:{
    alignContent: "center",
    paddingTop: -25,
    marginLeft: '-70%',
    top: '-10%',
    resizeMode: 'contain',
  },
  nametext:{
    alignContent: "center",
    paddingTop: -25,
    marginLeft: '-35%',
    top: '-23%',
    fontWeight:'bold',
    fontFamily: 'SF Pro Text',
    fontSize: 19,
  },
  dobtext:{ 
    alignContent: "center",
    paddingTop: -25,
    marginLeft: '-28%',
    top: '-23%',
    fontSize: 11,
  },
  age:{
    alignContent: "center",
    paddingTop: -25,
    marginLeft: '-35%',
    top: '-23%',
    fontSize: 9,
    color:'#7D7D7D',
  },
  measurementsText:{
    alignContent: "center",
    paddingTop: 1,
    marginLeft: '-60%',
    marginTop: '-25%',
    fontWeight:'500',
    fontFamily: 'SF Pro Text',
    fontSize: 15,
  },
  cardRow:{
    flexDirection: 'row',
  },
  cardtitle:{
    color: '#7D7D7D',
    //fontWeight: '800',
    top:'-30%',
    fontSize: 11,     
  },  
  cardtext:{
    textAlign:'center',
    marginTop:'-30%',
    fontSize: 11, 
  },
  cardMeasurements:{
    borderRadius: 4,
    elevation: 3,    
    width: 87,
    height:60, 
    marginTop:'1%',   
  },
  pIText:{
    alignContent: "center",
    paddingTop: -25,
    marginLeft: '-50%',
    marginTop: '1%',
    fontWeight:'500',
    fontFamily: 'SF Pro Text',
    fontSize: 15,
    top:-4,
  },
  cardRow2:{
    flexDirection: 'row', 
    top: -9,
  },
  cardPersonalInfo:{
    borderRadius: 4,
    elevation: 3,    
    width: 158,
    height:103,  
    //justifyContent:'space-between',  
  },
  cardtitlePI:{
    color: '#7D7D7D',
    textAlign:'left',
    top:'-10%',
    fontSize: 11,     
  },  
  cardtextPI:{
    textAlign:'left',
    top:'-30%',
    fontSize: 11, 
  },
  cardPersonalInfo2:{
    borderRadius: 4,
    elevation: 3,    
    width: 344,
    height:103,
    top: -10,     
  },
  cardPersonalInfo3:{
    borderRadius: 4,
    elevation: 3,    
    width: 344,
    height:45, 
    top: -20,   
  },
  imageShare:{    
    marginLeft:'85%',
    marginTop:'-4%',
  },
  imageDownload:{
     marginLeft:'96%',
     marginTop:'-5%',

  },

  

});
export default ChildProfile;