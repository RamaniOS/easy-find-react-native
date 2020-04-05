/*
This class for TextField
*/

import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors, Fonts} from '../theme/'

const Input = props => {
  const { inputStyle,  containerStyle} = styles;
  return (
    <View style={containerStyle}>
        <TextInput
          placeholder={props.placeHolderText}
          style={inputStyle}
          autoCorrect={false}
          placeholderTextColor={Colors.placeholder_color}
          secureTextEntry={props.isSecureEntry}
        />
    </View>
  )
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 20,
    alignSelf: "center",
    width: '90%'
  },
  inputStyle: {
    color: Colors.black,
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: Colors.placeholder_color,
    height: 45,
    borderRadius: 5,
    fontFamily: Fonts.font_regular
  }
});

export {Input};