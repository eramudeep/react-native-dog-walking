import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appColors} from '../../utils/appColors';
import TouchableRipple from 'react-native-touch-ripple';
import Label from '../Label';
import LinearGradient from 'react-native-linear-gradient';

export default function index({iconLeft, label, style, onPress, labelStyle}) {
  return (
    <LinearGradient
      start={{x: 0.1, y: 0.2}}
      end={{x: 0.5, y: 0.9}}
      colors={[ appColors.primary, appColors.primaryTwo]}
      style={[styles.gradinat]}
      >
      <TouchableRipple
        rippleColor={appColors.white}
        onPress={onPress}
        rippleDuration={800}
        style={[styles.container, style]}
        >
        {iconLeft&&  <View style={{paddingHorizontal:scale(10)}}>
          {iconLeft}
          </View>}
        <Label
          text={`${label}` }
          style={[styles.label, labelStyle]}
        />
      </TouchableRipple>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    gradinat:{
        height: scale(50),
        borderRadius: scale(30),
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
  container: {
    width:'100%',
    height: scale(50),
    flexDirection:'row',
    borderRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: scale(10),
  },
  label: {
    fontSize: scale(16),
    fontWeight: '500',
    color: appColors.white,
  },
});
