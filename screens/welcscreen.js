import React,{Component} from 'react';
import {View, Text} from 'react-native';
import Slides from '../components/slides';

const SLIDE_DATA = [
    {text: 'Welcome to JobApp', color:"#03A9f4"},

    {text : 'Use this to get a job',color:'#009688'},
    {text : 'Select your location, then swipe away', color : "#03A9f4"}

];

class WelcScreen extends Component {
    onSlidesComplete=() => {
        this.props.navigation.navigate("auth");

    }
    render(){
        return (    
            <Slides
                data = {SLIDE_DATA}
                onComplete={this.onSlidesComplete}
            />
            );
    }
}
export default WelcScreen;