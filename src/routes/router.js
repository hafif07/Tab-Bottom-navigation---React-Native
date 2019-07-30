import React from 'react'
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from 'react-navigation'
import Home from '../screen/Home';
import Profile from '../screen/Profile';


export const Stack = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="home"
                        color={tintColor}
                        size={30}
                    />
                )
            })
        },
        Profile: {
            screen: Profile,
            navigationOptions: () => ({
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name="person"
                        color={tintColor}
                        size={30}
                    />
                )
            })
        }
    },
    {
        tabBarOptions: {
            showLabel: false, // hide labels
            activeTintColor: '#F8F8F8', // active icon color
            inactiveTintColor: '#586589',  // inactive icon color
            style: {
                backgroundColor: '#171F33' // TabBar background
            }
        }
    }
)

