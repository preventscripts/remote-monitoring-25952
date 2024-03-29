import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { navigationOptions } from '../utils/constant';
// Scenes
import Dashboard from '../scenes/dashboard.scene';
import Starter from '../scenes/starter.scene';
import Guide from '../scenes/guide.scene';
import Testing from '../scenes/testing.scene';
// Scenes

const SignedStack = createStackNavigator({
    Dashboard:{
        screen:Dashboard,
        navigationOptions: () => navigationOptions
    },   
    Starter:{
        screen:Starter,
        navigationOptions: () => navigationOptions
    },
    Guide:{
        screen:Guide,
        navigationOptions: () => navigationOptions
    },
    Testing:{
        screen:Testing,
        navigationOptions: () => navigationOptions
    },
},{
    initialRouteName:'Dashboard'
});

export default SignedStack;