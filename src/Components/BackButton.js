/*
This class for Back Button
*/

import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Images, Colors } from '../theme/'

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle]} onPress={onPress}>
      <Image source={Images.back} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    zIndex: 1,
    alignItems: 'center',
    alignSelf: "flex-start",
    justifyContent: 'center',
    top: '10%',
    marginHorizontal: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.theme_color,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.44,
    shadowRadius: 2,
    elevation: 2,
  }
});

export { BackButton };