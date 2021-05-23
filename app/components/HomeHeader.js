import React, {useState} from 'react'
import { View, Image, Pressable, TextInput } from 'react-native'
import styles from '../styles/homeheader'
import images from '../resources/images/images_map'
import LinearGradient from 'react-native-linear-gradient'

const main_screen = ['PAST']

export const HomeHeader = ({ title, onSearch, searchText = '', navigate, onCancel = Function }) => {
    
    const [search_mode, set_search_mode] = useState(false)

    const cancelSearch = () => {
        onCancel()

        if (searchText === '')
            set_search_mode(false)
        if (onSearch && typeof (onSearch) == "function")
            onSearch('')
    }

    return !search_mode ?
            <View style={styles.header}>
                <Pressable
                            onPress={() => navigate.openDrawer()}
                        >
                            <Image source={images.menu} style={styles.headerIcon}/>
                        </Pressable>
                {
                    main_screen.indexOf(title) == -1
                    ?  
                    <LinearGradient
                    colors={["#50679D", "#50679D"]}
                    style={styles.buttonGradient}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 0, y: 1 }}
                    locations={[0, 1]}
                        >
                        <Image source={images.avatar} style={styles.headerAvatar}/>
                    </LinearGradient>
                    :
                    <Pressable
                            onPress={() => {                               
                                set_search_mode(true)
                            }}
                        >
                            <Image source={images.search_deactive} style={styles.searchImage}/>
                    </Pressable>
                }
            </View>
            :
            <View style={styles.header}>
            <View style={styles.headerSearchContainer}>
                <Pressable style={styles.headerSearchOnImageContainer}>
                    <Image style={[styles.headerSearchImage, styles.headerSearchOnImage]} source={images.search} />
                </Pressable>
                <TextInput
                    autoFocus={true}
                    value={searchText}
                    onChangeText={onSearch}
                    style={styles.headerSearchInput}
                    placeholder={'SEARCH'}
                    placeholderTextColor={styles.placeHolderColor}
                />
                <Pressable style={styles.headerSearchOnImageContainer} onPress={cancelSearch}>
                    <Image style={styles.headerCloseImage} source={images.close} />
                </Pressable>
            </View>
        </View>
}

export default React.memo(HomeHeader);