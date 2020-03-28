/*
This class for setting image as background image of screen
*/

import React from 'react';
import {StyleSheet, ImageBackground } from 'react-native';
import Images from '../theme/';

const ScreenBG = () => {
  const { style } = styles;
  return (
    <ImageBackground style={style} source={Images.splash}>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  screenBgStyle: {       
      position:'absolute',
      width:'100%',
      height:'100%'
    }
});

export default ScreenBG;