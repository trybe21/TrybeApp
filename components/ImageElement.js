import React, { Component } from "react";
import { 
AppRegistry,
StyleSheet,
Image,
} from 'react-native';
import FridgeImages from "./FridgeImages";

export default class ImageElement extends Component{
    render() {
        return(
            <Image 
            source={this.props.imgsource} 
            style={styles.image}></Image>

        );
    }
}
const styles = StyleSheet.create({
    image:{
        
    }

});

