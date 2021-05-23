import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import styles from '../styles/section_row'
import date_time from "../utils/date_time"


export const SectionRow = ({ item }) => {
    
    const date = date_time(item.date_utc)
   
    return(
        <View style={styles.itemContainer} >
            <Text style={styles.title}>{item.name}</Text>
            <Pressable  
            style={styles.items} 
            >
                    <View style={styles.flightInfoBox}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{'uri' : item.links['patch']['large']}}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.flightInfo}>
                            <Text style={styles.flightInfoItem}
                            >
                                Flight Date : {date}
                            </Text> 
                            <Text style={styles.flightInfoItem}
                            >
                                Flight Number : {item.flight_number}
                            </Text>                          
                        </View>
                    </View>
                    <View style={styles.flightNumberBox}>                       
                        <View style={styles.moreInfoContainer}>
                            <Text style={styles.moreText}>{item.flight_number}</Text>                       
                        </View>
                    </View>
            </Pressable>
        </View>
    )
}

export default React.memo(SectionRow)
