import React, { useCallback } from 'react';
import { View, Image, Pressable, Text } from 'react-native'
import images from '../resources/images/images_map'
import styles from '../styles/tab_bar'



export const BottomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.footer}>
            {state.routes.map((route, index) => {
                return index == -1 ?
                null
                :
               <TabBarItem key={index} state={state} route={route} index={index} navigation={navigation} descriptors={descriptors}/>  
            })}
        </View>
    );
}

const TabBarItem = ({ route, index, descriptors, navigation, state }) => {
    const { options } = descriptors[route.key]
    const label = options.title !== undefined ? options.title : route.name
    const is_focused = state.index === index
    const tab_bar_handler = useCallback((params, tab) => {
        if(tab == 'Home'){
            return(
                <>
                    <Image style={[styles.image, {display: params ? 'flex' : 'none'}]} source={images.home} />
                    <Image style={[styles.image, {display: params ? 'none' : 'flex'}]} source={images.home_deactive} />
                </>
            )
        }else if(tab == 'Past'){
            return(
                <>
                    <Image style={[styles.image, {display: params ? 'flex' : 'none'}]} source={images.past} />
                    <Image style={[styles.image, {display: params ? 'none' : 'flex'}]} source={images.past_deactive} />
                </>
            )
        }else if(tab == 'Upcoming'){
            return(
                <>
                    <Image style={[styles.image, {display: params ? 'flex' : 'none'}]} source={images.sync} />
                    <Image style={[styles.image, {display: params ? 'none' : 'flex'}]} source={images.sync_deactive} />
                </>
            )
        }
    })
    const onPress = () => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
        })
        if (!is_focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    }

    return (
        <Pressable
            onPress={onPress}
            style={styles.bottomTabContainer}
        >
            {tab_bar_handler(is_focused, route.name)}
            <Text type='small' 
                styles={[styles.bottomTabText, { color: is_focused ?  "#24325e" : "#a5a6ae" }]}>
                {label}
            </Text>
        </Pressable>
    );
}

export default React.memo(BottomTabBar)