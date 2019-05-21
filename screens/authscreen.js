import React,{Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
    componentDidMount(){
        this.props.facebookLogin;
    }
    render(){
        return (
            <Text>AuthScreen</Text>
        );
    }
}
export default connect(null,actions)(AuthScreen);