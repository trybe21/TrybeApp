import React, { Component } from "react";
import { 
AppRegistry,
StyleSheet,
Text,
View,
TouchableWithoutFeedback,
Dimensions,
Modal,
} from 'react-native';
import ImageElement from "./ImageElement";

export default class FridgeImages extends Component{
    state = {
        modalVisible: false,
        modalImage: require('../android/app/src/img/fridgeImages/Rectangle66.png'),
        images: [
            require('../android/app/src/img/fridgeImages/Rectangle66.png'),
            require('../android/app/src/img/fridgeImages/Rectangle67.png'),
            require('../android/app/src/img/fridgeImages/Rectangle68.png'),
            require('../android/app/src/img/fridgeImages/Rectangle69.png'),
            require('../android/app/src/img/fridgeImages/Rectangle70.png'),
            require('../android/app/src/img/fridgeImages/Rectangle71.png'),
            require('../android/app/src/img/fridgeImages/Rectangle72.png'),
            require('../android/app/src/img/fridgeImages/Rectangle73.png'),
            require('../android/app/src/img/fridgeImages/Rectangle74.png'),
            require('../android/app/src/img/fridgeImages/Rectangle75.png'),
            require('../android/app/src/img/fridgeImages/Rectangle76.png'),
            require('../android/app/src/img/fridgeImages/Rectangle77.png'),
            require('../android/app/src/img/fridgeImages/Rectangle78.png'),
            require('../android/app/src/img/fridgeImages/Rectangle79.png'),
            require('../android/app/src/img/fridgeImages/Rectangle80.png'),
        ]
    }
    setModalVisible(visible, imageKey){
        this.setState({ modalImage: this.state.images[imageKey]});
        this.setState({ modalVisible: visible});
    }
    getImage(){
        return this.state.modalImage;
        
    }
    render() {
        let images = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback key={key} 
                onPress={() => {this.setModalVisible(true, key)}}>
                <View style={styles.imagewrap}> 
                    <ImageElement imgsource={val}></ImageElement>
            </View>
            </TouchableWithoutFeedback>
        });
        return(
            <View style={styles.container}>
                <Modal style={styles.modal} animationType={'fade'}
                transparent={true} visible={this.state.modalVisible}
                onRequestClose={() => {}}>
                
                <View style={styles.modal}>
                    <Text style={styles.text}
                    onPress={() => {this.setModalVisible(false)}}>Close</Text>
                    <ImageElement imgsource={this.state.modalImage}></ImageElement>
                </View>

                </Modal>
                {images}
            </View>

        );

    
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        flexWrap: 'wrap',
        backgroundColor:'#eee',
    },
    imagewrap:{
        margin:1,
        padding:2,
        height: (Dimensions.get('window').height/4) - 34,
        width: (Dimensions.get('window').width/3) - 3,
        backgroundColor: '#fff',
        justifyContent:'center',
    },
    modal:{
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(0,0,0, 0.9)',
    },
    text:{
        color:'#ffffff',
    },

});
AppRegistry.registerComponent('FridgeImages', () => FridgeImages);