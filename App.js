import 'react-native-gesture-handler';
import React, {Component ,useState} from 'react';
import {Image, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';

import OnboardingScreen from './screens/OnboardingScreen';
import OnboardingScreen2 from './screens/OnboardingScreen2';
import OnboardingScreen3 from './screens/OnboardingScreen3';
import OnboardingScreen4 from './screens/OnboardingScreen4.';

import ResetPassword1 from './screens/ResetPassword1';
import ResetPassword2 from './screens/ResetPassword2';
import SyncingCalender from './screens/SyncingCalender';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Confirmation from './screens/Confirmation';
import UploadPhoto from './screens/UploadPhoto';

import ChildProfile from './screens/ChildProfile';
import FamilySetup from './screens/FamilySetup';
import InviteDad from './screens/InviteDad';
import AddChild from './screens/AddChild';

import Home from './screens/signedIn/Home';
import Calendar from './screens/signedIn/Calendar';
import Messages from './screens/signedIn/Messages';
import Notification from './screens/signedIn/Notification';
import Menu from './screens/signedIn/Menu';

import Fridge from './screens/signedIn/Fridge';
import FridgePost from './screens/signedIn/FridgePost';
import ChalkBoard from './screens/signedIn/ChalkBoard';
import FullViewofEvent from './screens/signedIn/FullViewOfEvent';
import CreateEvent from './screens/signedIn/CreateEvent';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from 'react-native-splash-screen';


import { Header } from 'react-native-elements';

import CategoriesMenu from './components/CategoriesMenu';
import Post from './components/Post';
import FridgeImages from './components/FridgeImages';




const Tab = createBottomTabNavigator();

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
    }
    
  }  
  render(){
    return (
      <View 
      style={styles.body}>
      <View style={{width:'100%', height:'100%',}}>
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: 18, height: 20, marginTop:10 }}
                  source={require('../TrybeApp/android/app/src/img/navTab/homeInactiveIcon.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            title: '',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: 18, height: 20, marginTop:10   }}
                  source={require('../TrybeApp/android/app/src/img/navTab/calendarInactiveIcon.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            title: '',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: 18, height: 20, marginTop:10  }}
                  source={require('../TrybeApp/android/app/src/img/navTab/messagesInactiveIcon.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            title: '',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: 18, height: 20, marginTop:10 }}
                  source={require('../TrybeApp/android/app/src/img/navTab/notificationInactiveIcon.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            title: '',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: 18, height: 15, marginTop:10   }}
                  source={require('../TrybeApp/android/app/src/img/navTab/menuInactiveIcon.png')}
                />
              );
            },
          }}
        />
        </Tab.Navigator>    
      </NavigationContainer> 
      </View>

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
    justifyContent:'center',
    resizeMode: 'contain',
  },
  arrowIcon:{
    marginTop: '-35%',
    marginLeft: '-83%',
  },
  
});
export default App;
