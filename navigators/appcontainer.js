import {createBottomTabNavigator,
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';


import AuthScreen from '../screens/authscreen';
import WelcomeScreen from '../screens/welcscreen';
import MapScreen from '../screens/mapscreen';
import DeckScreen from '../screens/deckscreen';
import ReviewScreen from '../screens/reviewscreen';
import SettingScreen from '../screens/settingscreen';

const MainNavigator = createBottomTabNavigator({
    welcome: {screen : WelcomeScreen},
    auth : { screen : AuthScreen},
    main :  {
      screen:createBottomTabNavigator({
        map : {screen:MapScreen},
        deck : {screen : DeckScreen},
        review : {
            screen: createStackNavigator({
              review:  {screen: ReviewScreen},
              settings : {screen : SettingScreen}

            })
        }

      })
    } ,
  });
const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;