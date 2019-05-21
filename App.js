import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator, StackNavigator} from 'react-navigation';
import AppContainer from './navigators/appcontainer';
import {Provider} from 'react-redux';
import store from './store';

export default class App extends React.Component {
  render() {
    
    return (
      <Provider store={store}></Provider>
      <View style={styles.container}>
        

        <AppContainer/>
        
      </View>
      </Provider>
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
  