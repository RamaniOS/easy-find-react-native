/*
Login screen
*/

import React, { Component, Fragment } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native'
import styles from './LoginStyle'
import { Input, Button } from '../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { password_regex, user_name_regex } from '../../Utilis'
import * as Constants from '../../Constants'

class Login extends Component {

  // Constructor
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
  }

  // Actions
  loginButtonClicked() {
    if (!user_name_regex.test(this.state.userName)) {
      alert(Constants.ERROR_INVALID_USER_NAME)
    } else if (!password_regex.test(this.state.password)) {
      alert(Constants.VALID_PASSWORD)
    } else {
      alert('success!!')
    }
  }

  // Render UI objects 
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safeTop}></SafeAreaView>
        <SafeAreaView style={styles.mainView}>
          <KeyboardAwareScrollView bounces={false}>
            <View style={styles.topView}>
              <Text style={styles.title}>Sign In</Text>
            </View>
            <Text style={styles.accountTitle}>Login to your account</Text>
            <View style={styles.bottomView}>
              <Input
                placeHolderText={'User name'}
                value={this.state.userName}
                onChangeText={(text) => this.setState({ userName: text })}
              />
              <Input
                placeHolderText={'Password'}
                isSecureEntry={true}
                onChangeText={(text) => this.setState({ password: text })}
              />
              <Button
                title={'SIGN IN'}
                onPress={() => { this.loginButtonClicked() }}
              />
            </View>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Signup') }}>
              <Text style={styles.signupContainer}>
                <Text style={styles.signupStyle}>Don't have an account?</Text>
                <Text style={styles.signup}> Sign up </Text>
              </Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </Fragment>
    )
  }
}

export default Login;