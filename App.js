import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Display from './components/Feed';
import Form from './components/Post';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


function Feed() {
  return (
    <Display/>
  );
}

function Post() {
    return (
        <Form/>
    );
}


const MainNav = createBottomTabNavigator({
    feed: {
        screen: Feed,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name='ios-options-outline' size={25} color={tintColor} />;
            }
        }
    },
    post: {
        screen: Post,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name='ios-create-outline' size={25} color={tintColor} />;
            }
        }
    }
});

export default createAppContainer(MainNav);