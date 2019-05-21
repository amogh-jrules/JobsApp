import React,{Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
//import { settings } from 'cluster';

class ReviewScreen extends Component {
    //class specific property
    static navigationOptions= ({navigation}) =>{
        return {
        title : "Review Jobs",
        headerRight: (
            <Button
            onPress = {()=>navigation.navigate('settings')}
            title= "Settings"
            type="clear"
            />
        )
        };
    };

    
    render(){
        return (
            <Text style={{flex:1}}>ReviewScreen</Text>
        );
    };
}
export default ReviewScreen;