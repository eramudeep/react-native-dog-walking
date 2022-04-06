import { View, Text,TextInput } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'; 
import { scale } from 'react-native-size-matters';
import { appColors } from '../utils/appColors';
export default function SearchField() {
  return (
    <View style={{borderRadius:scale(10), backgroundColor:appColors.lightGray, flexDirection:'row', justifyContent:'space-between', height:scale(43), alignItems:'center', padding:scale(10)}} >
        <MaterialIcons name="place"  size={scale(20)} color={appColors.placeHolderColor} />
       <TextInput  style={{  flex:1, fontSize:scale(17)}} placeholder="Kiyv, Ukraine" />
       <MaterialIcons name="tune"  size={scale(20)} color={appColors.placeHolderColor} />
    </View>
  )
}