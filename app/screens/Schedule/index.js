import { View, Text,ImageBackground, Pressable,ScrollView } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import Label from '../../components/Label'
import CustomButton from '../../components/CustomButton'
import { appColors } from '../../utils/appColors'
import Divider from '../../components/Divider'
 
export default function index() {

  const Card= ({hideBorder, label,subLabel})=>{
      return <View  style={{paddingHorizontal:scale(10),  borderLeftWidth: scale(hideBorder? 0: 0.7), flexDirection:'row', alignItems:'center', justifyContent:'center' }} >
          <Label style={{fontSize: scale(13)}} text={label? label: "$5"}  />
          <Label style={{fontSize: scale(13), paddingHorizontal:scale(5), color:appColors.gray}} text={subLabel? subLabel: "hr"}  />
      </View>
  }  
const Badge = ({label, isActive})=>{
   return <Pressable style={{justifyContent:'center', alignItems:'center', borderRadius:scale(14),  backgroundColor:isActive?  appColors.black : appColors.lightGray, padding:scale(12), height:scale(44), width:scale(99), }}>
    <Label  style={{fontSize: scale(13), color: isActive? appColors.white : appColors.gray}}  text={label} bold />
</Pressable>
}
 const Tabs = ()=>{
     return <View style={{paddingVertical:scale(20), flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} >
           <Badge isActive label={"About"} />
           <Badge label={"Location"} />
           <Badge label={"Reviews"} />
     </View>
 } 
 const _renderContent = ()=>{
     return <View  >
            <View  style={{flexDirection:'row', paddingVertical:scale(10)}} >
                <View style={{    height:scale(46)}}>
                    <Label text="Age" style={{fontSize:scale( 13) , color:appColors.gray }}  />
                    <Label text="30 years"  style={{paddingVertical:scale(5), fontSize:scale( 17)  }} bold  />
                </View>
                <View style={{marginLeft:scale(20),    height:scale(46)}}>
                    <Label text="Experience" style={{fontSize:scale( 13), color:appColors.gray  }}  />
                    <Label text="11 Months"  style={{paddingVertical:scale(5), fontSize:scale( 17)  }} bold  />
                </View>
                 
            </View>

          <View>
          <Label text="Alex has loved dogs since childhood. He is currently a veterinary student. Visits the dog shelter we..."  
            style={{paddingVertical:scale(5), fontSize:scale( 13), color:appColors.gray  }}   />
            <Label text="Read more"  style={{  fontSize:scale( 13) ,color:appColors.primary }}   />
          </View>
     </View>
 }
  return (
    <View>
        <ImageBackground resizeMode='contain' source={require("../../assets/imgs/me.jpg") } style={{
            width: scale( 449 ),
            height: scale( 447 ),
        }}>

        </ImageBackground>
       <View style={{paddingHorizontal:scale(20), backgroundColor:appColors.white, borderTopLeftRadius:scale(24),borderTopRightRadius:scale(24), top:scale( -100)}}>
            <View  style={{paddingVertical:scale(20), justifyContent:'center', alignItems:'center', borderBottomWidth:scale(0.7), borderBottomColor:appColors.gray }}>
                  <Label text="Alex Murray" style={{fontSize:scale(28)}} bold />
                  <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingVertical:scale(10)}}>
                    <Card hideBorder/>
                    <Card  label={"10"} subLabel={"km"} />
                    <Card label={"4.4"} subLabel={"⭐️"}  />
                    <Card label={"450"} subLabel={"Walks"}  />
                    
                  </View> 
            </View>

            <Tabs />
            {_renderContent()}
       </View>
    </View>
  )
}