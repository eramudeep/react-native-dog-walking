import { View, Text,FlatList } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import SearchField from '../../components/SearchField'
import AvatarImage from '../../components/AvatarImage'
import Label from '../../components/Label'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import { inboxList } from '../../utils/MockData'
 
export default function index() {

  const InboxCard = ({item})=>{
      const { name , msg , isRead , img } =item
      return <View style={{  flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:scale(15), borderBottomColor:appColors.gray, borderBottomWidth:1 }} >
        <AvatarImage source={img} size={scale(58)} />
        <View  style={{flex:1,   paddingHorizontal:scale(15)}}>
            <Label text={name}  bold style={{fontSize:scale(20)}} />
            <Label text={msg}  style={{fontSize:scale(17)}} />
        </View>

        {!isRead && <View style={{backgroundColor:appColors.primary , height:scale( 10), width: scale(10), borderRadius:scale(5) }} />}
      </View>
  }  
  return (
    <Container innerViewStyle={{paddingHorizontal:scale(0)}} >
      <View style={{paddingHorizontal:scale(20), paddingVertical:scale(20)}}>
      <SearchField /> 
      </View>

      <FlatList
      data={inboxList}
      //ItemSeparatorComponent={()=> <View style={{padding:scale(10), backgroundColor:'blue'}} />}
      renderItem={({item,index})=> <InboxCard  item={item} key={index}/> }
      />
      
    </Container>
  )
}