/*
SignUp screen
*/

import React, { Component, Fragment } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StatusBar
} from 'react-native'
import styles from './SignupStyle'
import {Input, Button} from '../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class Signup extends Component {

  // Constructor
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      fullName: '',
      password: '',
      confirmPassword: '',
    }
  }

  // Render UI objects
  render() {      
    return (
      <Fragment>
       <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeTop}></SafeAreaView>
       <SafeAreaView style={styles.mainView}>
       <KeyboardAwareScrollView bounces={false}>
         <View style={styles.topView}>
          <Text style={styles.title}>Sign Up</Text>
         </View>
         <Text style={styles.accountTitle}>Create your account</Text>
         <View style={styles.bottomView}>
           <Input 
            placeHolderText = {'User name'}
            onChangeText = {userName => this.setState({userName})}
           />
           <Input 
            placeHolderText={'Full name'}
            onChangeText = {
              fullName => this.state({fullName})}
           />
           <Input 
            placeHolderText={'Password'} 
            isSecureEntry= {true}
            onChangeText = {password => this.state({password})}
           />
           <Input 
            placeHolderText={'Confirm Password'} 
            isSecureEntry= {true}
            onChangeText = {confirmPassword => this.state({confirmPassword})}
           />
           <Button
             title={'SIGN UP'}
             onPress = {() => {
                this.signupButtonClicked()
              }}
            />
         </View>
          </KeyboardAwareScrollView>
       </SafeAreaView>
       </Fragment>
    )
  }

  // Actions
  signupButtonClicked() {
    if (this.userName == '') {

    }
  }
}

export default Signup;