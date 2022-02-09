import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import ReduxWrapper from 'Redux/ReduxWrapper'
import { appColors } from '../../utils/appColors'

function Label({text,style,bold, appState:{darkMode}}) {
     
    return (
    <Text style={[styles.label, darkMode?  styles.dark : styles.light, style, bold&& styles.bold ]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    label:{
        fontSize:scale(14),
        color:appColors.black,
        fontFamily: 'Poppins'
    },
    light:{ 
        color:appColors.black
    },
    dark:{ 
        color:appColors.white
    },
    bold:{
        fontFamily: 'Poppins-Bold'
    },

})


export default  ReduxWrapper(Label)