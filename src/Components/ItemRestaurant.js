/*
This class to manage row of restaurant
*/

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../theme'
import LinearGradient from 'react-native-linear-gradient';

const ItemRestaurant = ({item}) => {
  return (
    <View style={styles.container}>
        <Text>{item.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {       
        padding: 16,
        marginTop: 16,
        backgroundColor: 'red',
        height: 50
      }
  });

export { ItemRestaurant };