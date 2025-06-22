import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import DeliveryScreen from '@features/delivery/DeliveryScreen'
import ReorderScreen from '@features/reorder/ReorderScreen'
import DiningScreen from '@features/dining/DiningScreen'
import LiveSccreen from '@features/live/LiveScreen'

const Tab = createBottomTabNavigator()
const UserBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
       tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name='Delivery' component={DeliveryScreen}/>
      <Tab.Screen name='Reorder' component={ReorderScreen}/>
      <Tab.Screen name='dining' component={DiningScreen}/>
      <Tab.Screen name='Live' component={LiveSccreen}/>
    </Tab.Navigator>
  )
}

export default UserBottomTabs;