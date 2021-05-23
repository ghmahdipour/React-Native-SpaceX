import React, { useState, useEffect } from 'react'
import { StatusBar, View, FlatList } from 'react-native';
import  { HomeHeader }  from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { SectionRow } from '../components'
import Spinner from 'react-native-loading-spinner-overlay'
import { Loading }  from '../components/Loading'
import loading_spinner from '../resources/js/loading_spinner'
import axios from 'axios'
import styles from '../styles/home_screen'

export const UpComing = (props) => {

    const data_list = useSelector(state => state.up_coming.data)
    const [loading_visible, set_loading_visible] = useState(true)
    const [show_loading, set_show_loading] = useState(true)
    const dispatch = useDispatch()

    const call_api = () => {
        axios({
            url:'/launches/upcoming',
            method: 'GET',
            timeout:3000
        })
        .then((res) => {
            dispatch({ 'type' : 'UPCOMING_DATA_DONE', 'payload' :  res.data})
            set_loading_visible(false)           
        })
        .catch((err) => console.log(err))
    }

    useEffect(()=> {
        call_api()
    },[])

    return (
        <View>
            <StatusBar hidden />
            <HomeHeader 
                title="UPCOMING"
                navigate={props.navigation}
                />
            <View style={styles.mainContainer}>
                {
                    !data_list || data_list == 0
                    ?
                    <Spinner 
                        visible={loading_visible}
                        textContent={'Loading...'}
                        textStyle={styles.spinnerTextStyle}
                    />
                    :
                    <FlatList 
                    data={data_list}
                    initialNumToRender={10}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    style={styles.flatlist}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
						return <SectionRow item={item} />
					}}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => {
                        if (data_list.length != 0)
							set_show_loading(false)
                        else
                            call_api()     
                    }}
                    ListFooterComponent={() => {
						return show_loading &&
                            <Loading color={loading_spinner['loading_spinner']} style={styles.spinner} />
					}}                 
                     /> 
                }   
            </View>
        </View>
    )
}


export default UpComing;