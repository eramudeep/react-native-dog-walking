import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'; 
import {RoutesList,TabRoutes} from './routes';
import StackCreater from './StackCreator';
import  ErrorBoundry from "../ErrorBoundry";
import TabCerator from './TabCreator';


export default function MainStack() {
  return (
    <NavigationContainer>
      <ErrorBoundry>
        <StackCreater routs={ [...RoutesList,

      {
        name: 'Home',
        component :()=> <TabCerator  routes={TabRoutes}/> ,
        options: {
          tabBarBadge: 3,
          tabBarLabel: 'Home',
          //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
        },
      },
        ]} />
      </ErrorBoundry>
    </NavigationContainer>
  );
}
