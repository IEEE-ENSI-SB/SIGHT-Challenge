// Main.js

import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#5856D6" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: 'flex',
            position: 'absolute',
            bottom: 20,
            left: 25,
            right: 25,
            elevation: 5,
            backgroundColor: '#5856D6',
            borderRadius: 30,
            height: 60,
          },
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Dashboard"
          component={Screen1}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}
              >
                <Icon
                  name="home"
                  size={30}
                  color={focused ? 'white' : '#9594e5'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={Screen2}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}
              >
                <Icon
                  name="drop"
                 
                  size={30}
                  color={focused ? 'white' : '#9594e5'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={Screen3}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? -10 : -20,
                  width: Platform.OS === 'ios' ? 50 : 60,
                  height: Platform.OS === 'ios' ? 50 : 60,
                  borderRadius: Platform.OS === 'ios' ? 25 : 30,
                  backgroundColor: 'white',
                }}
              >
                <Icon
                  name="circle-with-plus"
                  size={Platform.OS === 'ios' ? 50 : 60}
                  color={focused ? '#ff4162' : '#ff748c'}
                />
              </View>
            ),
            tabBarIconStyle: {},
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={Screen4}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}
              >
                <Icon
                  name="adjust"
                  size={30}
                  color={focused ? 'white' : '#9594e5'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={Screen5}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}
              >
                <Icon
                  name="feather"
                  size={30}
                  color={focused ? 'white' : '#9594e5'}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Main;
