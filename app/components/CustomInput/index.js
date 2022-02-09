import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { appColors, shadow } from '../../utils/appColors'
import { scale } from 'react-native-size-matters'
import ReduxWrapper from '../../redux/ReduxWrapper'
import Label from '../Label'

function CustomInput({
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    InputStyle,
    IconRight,
    IconLeft,
    appState:{darkMode}
}) {
    return (
        <View style={[styles.container, darkMode ? styles.dark : styles.light]}>
            {IconLeft && <IconLeft/>}
            <View style={{padding:scale(10) }} >
                <Label text={placeholder}  style={{fontSize:scale(10), color:appColors.gray}} />
          
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                placeholderTextColor={darkMode ?  styles.darkLabel.color : styles.lightLabel.color }
                style={[styles.input,InputStyle, darkMode ? styles.darkLabel : styles.lightLabel ]}
            />
            {IconRight && <IconRight/>}
              </View>
        </View>
    )
}
export default  ReduxWrapper(CustomInput)
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: scale(10),
        margin:scale(5),
        height: scale(50),
        alignItems: "center",
        backgroundColor: appColors.white,
        borderRadius:scale(14),
        ...shadow
    },
    input: {
        flex: 1,
        fontSize: scale(14)
    },
    light:{ 
        backgroundColor:appColors.lightGray
    },
    dark:{ 
        backgroundColor:appColors.black
    },

    lightLabel:{ 
        color:appColors.black
    },
    darkLabel:{ 
        color:appColors.white
    }
})
