/*
This class for Button
*/

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '../theme/'

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle]} onPress = {onPress}>
        <Text style={[styles.textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    position:'relative',
    height: 45,
    backgroundColor: Colors.theme_color,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    borderRadius: 21,
    top: 30
  },
  textStyle: {
    fontFamily: Fonts.font_bold,
    color: Colors.white,
    fontSize: 18,
    alignSelf: 'center',     
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 1,     
  }
});

export {Button};