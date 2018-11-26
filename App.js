/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Home from './src/components/Home';
import Find from './src/components/Find';
import Booking from './src/components/Booking';
import Events from './src/components/Events';
import Profile from './src/components/Profile';
import Details from './src/components/Details';

const HomeStack = createStackNavigator({
  Home: { screen: Home },
  Details: { screen: Details },
});

const FindStack = createStackNavigator({
  Find: { screen: Find },
  Details: { screen: Details },
});

const BookingStack = createStackNavigator({
  Booking: { screen: Booking },
  Details: { screen: Details },
});

const EventsStack = createStackNavigator({
  Events: { screen: Events },
  Details: { screen: Details },
});

const ProfileStack = createStackNavigator({
  Profile: { screen: Profile },
  Details: { screen: Details },
});

export default createAppContainer(createBottomTabNavigator(
  {
    'Home': { screen: HomeStack },
    'Find DJ': { screen: FindStack },
    'Bookings': { screen: BookingStack },
    'Events': { screen: EventsStack },
    'Profile': { screen: ProfileStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          //iconName = "ios-information-circle${focused ? '' : '-outline'}";
          iconName = 'ios-home';
        } else if (routeName === 'Find DJ') {          
          iconName = 'ios-search';
        }else if (routeName === 'Bookings') {
          iconName = 'md-calendar';
        }else if (routeName === 'Events') {
          iconName = 'ios-musical-notes';
        }else if (routeName === 'Profile') {
          iconName = 'ios-contact';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: "#4A4A4A"
      },
    },
  }
));