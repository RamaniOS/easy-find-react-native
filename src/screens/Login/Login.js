/*
Login screen
*/

import React, { Component, Fragment } from 'react'
import {Colors} from '../../theme/'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'
import styles from './LoginStyle'

class Login extends Component {
  render() {      
    return (
      <Fragment>
      <SafeAreaView style={styles.safeTop}></SafeAreaView>
       <SafeAreaView style={styles.mainView}>
         <View style={styles.topView}>
         <Text style={styles.title}>Sign In</Text>
         </View>
         <Text style={styles.accountTitle}>Login to your account</Text>
         <View style={styles.bottomView}></View>
         <TouchableOpacity onPress={() => { }}>
            <Text style={styles.signupContainer}>
              <Text style={styles.signupStyle}>Don't have an account?</Text>
              <Text style={styles.signup}> Sign up </Text>
            </Text>
          </TouchableOpacity> 
       </SafeAreaView>
       </Fragment>
    )
  }
}

export default Login;