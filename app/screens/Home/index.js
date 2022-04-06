import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View,ScrollView, FlatList,  } from 'react-native'
import { useSelector,useDispatch } from 'react-redux';
import { setError } from '../../redux/actions';
import {  } from 'react-native-gesture-handler';
import { features, starterIntro,nearYou } from '../../utils/MockData';
import { AlertHelper } from '../../utils/AlertHelper';
import { appColors,shadow } from '../../utils/appColors';
import CustomInput from '../../components/CustomInput';
import Label from '../../components/Label';
import CustomButton from '../../components/CustomButton';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'; 
import Divider from '../../components/Divider';
import Modal from 'Components/Modal';
import { scale } from 'react-native-size-matters'; 
import ReduxWrapper from '../../redux/ReduxWrapper';
import Container from '../../components/Container';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'; 
import SearchField from '../../components/SearchField';
import NearYouCard from '../../components/NearYouCard';

function Home({navigation,toggleDarkMode$}) {
    
  const _renderHeader = ()=>{
    return <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center' }} >
        <View >
          <Label text="Home"  bold  style={{...shadow, fontSize:scale(34)}} />
          <Label text="Explore dog walkers"  style={{fontSize:scale(17), color:appColors.gray}} />
        </View>
        <CustomButton  onPress={()=> navigation?.navigate("Schedule") } iconLeft={<MaterialIcons name="add"  size={scale(12)} color={appColors.white} />} 
        label={"Book a walk"}  
        style={{width:scale(104), fontSize:scale(10), paddingHorizontal:scale(12)}} 
        
        labelStyle={{fontSize:scale(11)}} />
    </View>
  }
  const HeadingLabel = ({label,subLabel})=>{
    return <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} >
      <Label text={label? label: "Near you"} style={{fontSize: scale(34) }} bold />
      <Label text={subLabel? subLabel :"View All"}  style={{textDecorationLine: 'underline',fontSize:scale( 15)   }} />
    </View>

  }
    return ( 
        
        <Container style={styles.scrollContainer} isScrollable>
           {_renderHeader()} 
           <View style={{paddingVertical:scale(20)}}>
            <SearchField />
           </View>

           <View style={{paddingVertical:scale(20)}}>
           <HeadingLabel />
            <FlatList
            style={{paddingVertical:scale(20)}}
            horizontal
            data={nearYou}
            ItemSeparatorComponent={()=> <View style={{padding:scale(20)}} /> }
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=> <NearYouCard item={item} key={index} /> }
            />
           </View>


           <View style={{paddingVertical:scale(20)}}>
           <HeadingLabel label={"Suggested"}   />
            <FlatList
            style={{paddingVertical:scale(20)}}
            horizontal
            data={nearYou?.reverse()}
            ItemSeparatorComponent={()=> <View style={{padding:scale(20)}} /> }
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=> <NearYouCard item={item} key={index} /> }
            />
           </View>

           
           
           
        </Container>
        
       
    )
}


export default ReduxWrapper(Home)
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      backgroundColor: appColors.primary,
      alignItems: 'center',
      borderBottomWidth: 12,
      borderBottomColor: '#ddd',
    },
    headerText: {
      color: 'white',
      fontSize: 25,
      padding: 20,
      margin: 20,
      textAlign:'center'
    },
    TitleText: {
        fontSize: 25,
        // padding: 20,
        marginVertical: 20,
      },
    scrollContainer: {
      flex: 1,
      paddingHorizontal:20
    },
    
  });