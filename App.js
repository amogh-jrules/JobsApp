import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator, StackNavigator} from 'react-navigation';
import AppContainer from './navigators/appcontainer';

export default class App extends React.Component {
  render() {
    
    return (
      <View style={styles.container}>
        

        <AppContainer/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
    justifyContent: 'center',
  },
});
