import React, { useState, useEffect } from 'react'
import { StatusBar, View, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import  { HomeHeader }  from '../components'
import styles from '../styles/home_screen'
import { SectionRow } from '../components'
import Spinner from 'react-native-loading-spinner-overlay'
import { Loading }  from '../components/Loading'
import loading_spinner from '../resources/js/loading_spinner'
import axios from 'axios'


export const PastScreen = (props) => {

    const [search_text, set_search_text] = useState('')
    const data_list = useSelector(state => state.past_screen.data)
    const [loading_visible, set_loading_visible] = useState(true)
    const [show_loading, set_show_loading] = useState(true)
    const dispatch = useDispatch()
   
    const call_api = () => {
        axios({
            url:'/launches/past',
            method: 'GET',
            timeout:3000
        })
        .then((res) => {
            dispatch({ 'type' : 'PAST_DATA_DONE', 'payload' :  { 'data': res.data , 'show': true }})
            set_loading_visible(false)           
        })
        .catch((err) => console.log(err))
    }

    const search_cancel = () => {
        set_search_text('')
        dispatch({ 'type' : 'PAST_DATA_DONE', 'payload' :  { 'data': data_list , 'show': false }})
    }

    const _file_info = data_list.filter((item) => {
        const _item_data = `${item.name.toUpperCase()}`;
        const _text_data = search_text.toUpperCase();
        return _item_data.indexOf(_text_data) > -1;
    })

    useEffect(()=> {
        call_api()
    },[])

    return (
        <View>
            <StatusBar hidden />
            <HomeHeader 
                title="PAST"
                onSearch={text => set_search_text(text)}
                searchText={search_text}
                onCancel={search_cancel}
                navigate={props.navigation}
            />
            <View style={styles.mainContainer}>
                    {
                    !_file_info || _file_info == 0
                    ?
                    <Spinner 
                        visible={loading_visible}
                        textContent={'Loading...'}
                        textStyle={styles.spinnerTextStyle}
                    />
                    :
                    <FlatList 
                    data={_file_info}
                    initialNumToRender={10}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    style={styles.flatlist}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
						return <SectionRow item={item} />
					}}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => {
                        if (_file_info.length != 0)
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

export default PastScreen;