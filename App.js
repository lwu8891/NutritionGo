import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignUp from './screens/SignUp'
import Nutrition from './screens/Nutrition'
import Login from './screens/Login'
import NutritionFacts from './screens/NutritionFacts'
import Home from './screens/Home'
import Profile from './screens/Profile'
import PrivacyPolicy from './screens/PrivacyPolicy'
import {init} from './UserDB/Helper'



class App extends React.Component {
  db_setup = () =>{
    init();
  }

  componentDidMount() {
    this.db_setup();
    //Alert.alert("here");
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return <Application/>;
  }

}

  const MainNavigator = createStackNavigator(

    {
      LoginScreen: {screen: Login, navigationOptions: { header: null }},
      SignUpScreen: {screen: SignUp, navigationOptions: { headerTransparent: true }},
      SearchScreen: {screen: Nutrition, navigationOptions: { header: null }},
      NutritionFactsScreen: {screen: NutritionFacts, navigationOptions: { headerTransparent: true }},
      HomeScreen: {screen: Home, navigationOptions: { header: null }},
      ProfileScreen: {screen: Profile, navigationOptions: { header: null }},
      PrivacyPolicyScreen: {screen: PrivacyPolicy, navigationOptions: { header: null }}
    },

    {
        initialRouteName: 'LoginScreen',
   //     headerMode: 'none'
    }

  );

  const Application = createAppContainer(MainNavigator);

export default App;