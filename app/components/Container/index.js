import React from 'react'
import { ScrollView, StyleSheet, Text, View,SafeAreaView } from 'react-native'
import { scale } from 'react-native-size-matters'
import ReduxWrapper from '../../redux/ReduxWrapper'
import { appColors } from '../../utils/appColors'

function Container({children,innerViewStyle, isScrollable, appState:{darkMode}}) { 
    return (
        <SafeAreaView style={styles.container}>
            {
                isScrollable? <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[styles.innerView,innerViewStyle,  darkMode ? styles.dark : styles.light ]}>
                        {children}
                    </View>
                </ScrollView>
                :
                <View style={[styles.innerView,innerViewStyle,  darkMode ? styles.dark : styles.light ]}>{children}</View>
            }
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    innerView:{
        flex:1,
        paddingHorizontal:scale(20)
    },
    light:{ 
        backgroundColor:appColors.white
    },
    dark:{ 
        backgroundColor:appColors.black
    }
})
export default  ReduxWrapper(Container)