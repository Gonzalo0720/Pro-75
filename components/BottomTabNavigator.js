import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Viaje" component={RideScreen} />
          <Tab.Screen name="Historial de viaje" component={RideHistoryScreen} />

           {/*<Tab.Screen name= "Ride" />
          <Tab.Screen name=" Ride History" */}

           {/*<Screen name="Ride" component={RideScreen} />
          <Screen name="Ride History" component={RideHistoryScreen} />*/}

           {/*<TabScreen name="Viaje" component={RideScreen} />
          <TabScreen name="Historial de viaje" component={RideHistoryScreen} />*/}
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
