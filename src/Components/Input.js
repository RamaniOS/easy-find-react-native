/*
This class for TextField
*/

import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../theme/'

const Input = props => {
  const { inputStyle,  containerStyle} = styles;
  return (
    <View style={containerStyle}>
        <TextInput
          placeholder={props.placeHolderText}
          style={inputStyle}
          autoCorrect={false}
          placeholderTextColor={'#D3D3D3'}
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
    color: '#000',
    padding: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    backgroundColor:'transparent',
    height: 45,
    borderRadius: 5,
    fontFamily: 'Arial'
  }
});

export {Input};