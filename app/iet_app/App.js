import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/container/Home';
import ViewAnswer from './screens/container/ViewAnswer';
import SearchQuestion from './screens/container/SearchQuestion';
import AddQuestion from './screens/container/AddQuestion';
import Login from './screens/container/Login';
import Registration from './screens/container/Registration';
import ProfileOne from './screens/container/ProfileOne';
import ProfileTwo from './screens/container/ProfileTwo';
import AddAnswer from './screens/container/AddAnswer';
import SearchName from './screens/container/SearchName';
import DetailProfile from './screens/container/DetailProfile';
import Choose from './screens/container/Choose';


const MainNavigator = createStackNavigator({
  Login : {screen : Login},
  Registration : {screen : Registration},
  Home : {screen : Home},
  ViewAnswer : {screen : ViewAnswer},
  SearchQuestion : {screen : SearchQuestion},
  AddQuestion : {screen : AddQuestion},
  ProfileOne : {screen : ProfileOne},
  ProfileTwo : {screen : ProfileTwo},
  AddAnswer : {screen : AddAnswer},
  SearchName : {screen : SearchName},
  DetailProfile : {screen : DetailProfile},
  Choose : {screen : Choose},
},
{
  headerMode : 'none'
},
)

const App = createAppContainer(MainNavigator);

export default App;
