import React from 'react'
import LottieView from 'lottie-react-native'

export const Loading = (props) => {
    return (
        <LottieView source={props.color} autoPlay loop style={[{height: 20, alignSelf: 'center'}, props.style]} />
    )
}

export default Loading