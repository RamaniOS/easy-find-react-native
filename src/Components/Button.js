/*
This class for Button
*/

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../theme/'

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle]} onPress={onPress} >
      <Text style={[styles.textStyle]}>Sign In</Text>
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
    fontFamily: 'Arial',
    color: '#FFF',
    fontSize: 20,
    alignSelf: 'center',     
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 1,     
  },
});

export {Button};