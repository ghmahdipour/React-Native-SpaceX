import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabBar } from '../components'
import { HomeScreen, PastScreen, UpComing } from '../screens'

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
    return (
        <Tab.Navigator
            backBehavior="initialRoute"
            tabBar={props => <BottomTabBar {...props} />}
        >
            <Tab.Screen
                options={{
                    "title": 'Home'
                }}
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                options={{
                    "title": 'Past'
                }}
                name="Past"
                component={PastScreen}
            />
            <Tab.Screen
                options={{
                    "title": 'Upcoming'
                }}
                name="Upcoming"
                component={UpComing}
            />
        </Tab.Navigator>
    )
}

export default MainTabs;