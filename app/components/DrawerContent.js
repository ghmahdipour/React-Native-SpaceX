import React from 'react'
import { View, Image } from 'react-native'
import styles from '../styles/drawer_content'
import images from '../resources/images/images_map'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import LinearGradient from 'react-native-linear-gradient'
import { Avatar, Title, Caption, Paragraph, Drawer } from 'react-native-paper'

export const DrawerContent = (props) => {
    return(
        <View style={{flex : 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.header}>
                            {/* <Avatar.Image source={images.avatar} size={50}/> */}
                            <LinearGradient
                                colors={["#50679D", "#50679D"]}
                                style={styles.buttonGradient}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 0, y: 1 }}
                                locations={[0, 1]}
                                    >
                        <Image source={images.avatar} style={styles.headerAvatar}/>
                    </LinearGradient>
                            <View style={styles.userInfo}>
                                <Title style={styles.title}>mosssiiiiiii</Title>
                                <Caption style={styles.caption}>@mosssiiiiiii</Caption>
                            </View>
                        </View>

                        <View style={styles.rowDrawer}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>120</Paragraph>
                                <Caption style={styles.caption}>following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>140</Paragraph>
                                <Caption style={styles.caption}>follower</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                        icon={({size}) => {                           
                            return (
                                <Image source={images.home_deactive}
                                    style={{ height: size, width: size }}
                                    resizeMode="contain"
                                />
                            )
                        }
                    }
                            label ="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({size}) => {                           
                                return (
                                    <Image source={images.past_deactive}
                                        style={{ height: size, width: size }}
                                        resizeMode="contain"
                                    />
                                )
                            }}
                            label ="Past launches"
                            onPress={() => {props.navigation.navigate('Past')}}
                        />
                        <DrawerItem 
                            icon={({size}) => {                           
                                return (
                                    <Image source={images.sync_deactive}
                                        style={{ height: size, width: size }}
                                        resizeMode="contain"
                                    />
                                )
                            }}
                            label ="Upcoming launches"
                            onPress={() => {props.navigation.navigate('Upcoming')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    label ="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    )
}


export default DrawerContent;