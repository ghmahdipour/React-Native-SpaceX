import React from 'react'
import { Provider } from 'react-redux'
import Store from './utils/create_store'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeScreen } from './screens'
import { DrawerContent } from './components'
import { MainTabs } from './navigations'

const Drawer = createDrawerNavigator()

export const AppWrapper = () => {
    return(
        <Provider store={Store}>
             <NavigationContainer>
                    <Drawer.Navigator 
                    drawerContent={props => <DrawerContent {...props} />}
                    initialRouteName="Main"
                    screenOptions={{ headerShown:false}}
                    >
                        <Drawer.Screen name="Home" component={HomeScreen} />
                        <Drawer.Screen name="Main" component={MainTabs}/>
                    </Drawer.Navigator>
            </NavigationContainer> 
        </Provider>
    )
}

export default AppWrapper;