import { View, Text,ImageBackground } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import Label from './Label'
import { appColors } from '../utils/appColors'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'

export default function NearYouCard({item}) {
    const {
        name, 
        img ,
        distence ,
        price,
        rating

    }=item


  const _renderRating = ()=>{
      return <View style={{borderRadius:scale(6), flexDirection:'row', justifyContent:'space-between', alignItems:'center', position:'absolute', backgroundColor:'rgba(229, 229, 234, 0.2)', top:scale( 10), right:scale( 10), padding:scale(10)}} >
            <MaterialIcons name="star" color={appColors.primary} />
            <Label text={rating} bold style={{color:appColors.primary, fontSize:scale(10)}}/>
            
      </View>
  }  
  return (
    <View style={{   borderRadius:scale(14),   justifyContent:'center', alignItems:'center' }} >
        <ImageBackground resizeMode='cover'  source={img} style={{  height:scale(176), width:scale(200),borderRadius:scale(14),overflow:'hidden' }} />
        {_renderRating()}
      <View style={{ width:scale(200),   paddingVertical:scale(20), flexDirection:'row', justifyContent:'space-between',alignItems:'center'}} >
        <View>
            <Label text={name} bold />
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
             <MaterialIcons name="place" />
            <Label text={distence} style={{fontSize:scale(10), marginLeft:scale(5)}} /> 
            </View>
         
        </View>
         <View style={{backgroundColor:appColors.black,paddingVertical:scale(12), paddingHorizontal:scale(10), borderRadius:scale(7)}} >
            <Label text={`$${price}/h`}  style={{color:appColors.white,paddingHorizontal:scale(10)}} bold /> 
         </View>
      </View>
    </View>
  )
}