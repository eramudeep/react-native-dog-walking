import {View, Text} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Label from '../../components/Label';
import {scale} from 'react-native-size-matters';
import {appColors} from '../../utils/appColors';
import MaterialIcons from 'react-native-vector-icons/dist/FontAwesome'; 
export default function index() {
  const fields = [
    {
      name: 'Full Name',
      placeholder: 'Full Name',
    },
    {
      name: 'Email',
      placeholder: 'Email',
    },
    {
      name: 'Password',
      placeholder: 'Password',
      secureTextEntry: true,
    },
  ];
  return (
    <Container>
        <View>
        <MaterialIcons name="arrow-left" size={scale(25)} />
        </View>
      <View style={{paddingVertical: scale(30)}}>
        <Label text="Let’s  start here" style={{fontSize: scale(34)}} bold />
        <Label
          text="Fill in your details to begin"
          style={{fontSize: scale(17), color: appColors.gray}}
        />
      </View>
      {fields?.map((filed, index) => {
        return (
          <View style={{paddingVertical: scale(7)}}>
            <CustomInput {...filed} key={index} />
          </View>
        );
      })}

            <View style={{paddingVertical: scale(7)}}>
            <CustomButton label={'Sign Up'} />
          </View>
          <View style={{paddingVertical: scale(7), justifyContent:'center', alignItems:'center'}}>
          <Label text="Or" style={{fontSize: scale(17)}} />
          </View>

      

          <View style={{   height:160, paddingVertical: scale(7), justifyContent:'space-between',  }}>
       
            <CustomButton  
            iconLeft={<MaterialIcons  name="facebook" size={scale(25)}  color={appColors.white}/>}
            style={{flex:1,width:'100%'}} label={'Connect with Facebook'} />
            <CustomButton
              iconLeft={<MaterialIcons  name="google" size={scale(25)}  color={appColors.white}/>}
            style={{width:'100%',flex:1 }} label={'Connect with Google'} 
            
            />
          </View>
          <View style={{paddingVertical: scale(7), justifyContent:'center', alignItems:'center', flexDirection:'row', flexWrap:'wrap'}}>
            <Label text="By signing in, I agree with" style={{fontSize: scale(13),color:appColors.gray}} />
            <Label text=" Terms of Use" style={{fontSize: scale(15), }}   />
            <Label text=" and "  style={{fontSize: scale(13),color:appColors.gray}}/>
            <Label text="Privacy Policy" style={{fontSize: scale(15)}} />
          </View>

      
    </Container>
  );
}
