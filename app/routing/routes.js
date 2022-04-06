/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description List of routes for Tabs Navigator and Stack navigator, Along addational  Option for Tabs
 */
 import React from 'react';
import Home from '../screens/Home';
import OnBoarding from '../screens/OnBoarding';
import Login from '../screens/Login';
import Schedule from '../screens/Schedule';
import Inbox from '../screens/Inbox';
import {appColors} from '../utils/appColors';
import { scale } from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { View } from 'react-native';
export const RoutesList = [
  {
    name: 'OnBoarding',
    component: OnBoarding,
    options: {
      tabBarBadge: 3,
      tabBarLabel: 'OnBoarding',
      tabBarButton:()=>null
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },
  

  {
    name: 'Login',
    component: Login,
    options: {
      tabBarBadge: 3,
      tabBarLabel: 'Login', 
    },
  },


   


  {
    name: 'Schedule',
    component: Schedule,
    options: { 
      tabBarLabel: 'Schedule',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

  

  
  
];


export const TabRoutes=[


  {
    name: 'Home',
    component: Home,
    options: { 
      tabBarLabel: 'Home',
      tabBarIcon: (props) => <CustomIcon props={props} iconName="home" />,
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

  {
    name: 'Inbox',
    component: Inbox,
    options: { 
      tabBarLabel: 'Inbox',
      tabBarIcon: (props) => <CustomIcon props={props} iconName="near-me" />,
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

]

const CustomIcon = ({ props, iconName, animationProps }) => {
  const { focused } = props 
  return (
    <Animatable.View
      {...animationProps}
      style={{
        padding: scale(10),
        height: scale(70),
        width: scale(70),
        justifyContent:
          /* Platform.OS === 'android' ? 'flex-start' :  */ 'center',
        alignItems: 'center',
        // borderRadius: scale(50),
        //backgroundColor:appColors.white
      }}>
      <View
        style={[{
          borderRadius: scale(20),
        }, focused ? {} : { opacity: scale(0.4) }]}>
        <MaterialIcons
          name={iconName ? iconName : 'home'}
          size={scale(32)} /* color={appColors.white} */
          {...props}
          
        />
      </View>
    </Animatable.View>
  );
};
