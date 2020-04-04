/*
SignUp screen
*/

import React, { Component, Fragment } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native'
import styles from './SignupStyle'
import {Input, Button} from '../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class Signup extends Component {
  render() {      
    return (
      <Fragment>
       <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeTop}></SafeAreaView>
       <SafeAreaView style={styles.mainView}>
       <KeyboardAwareScrollView>
         <View style={styles.topView}>
          <Text style={styles.title}>Sign Up</Text>
         </View>
         <Text style={styles.accountTitle}>Create your account</Text>
         <View style={styles.bottomView}>
           <Input placeHolderText={'User name'}>
           </Input>
           <Input placeHolderText={'Full name'}>
           </Input>
           <Input placeHolderText={'Password'} isSecureEntry= {true}>
           </Input>
           <Input placeHolderText={'Confirm Password'} isSecureEntry= {true}>
           </Input>
           <Button>
             title={'SIGN UP'}
             onPress={() => { alert('Login clicked') }}
           </Button>
         </View>
          </KeyboardAwareScrollView>
       </SafeAreaView>
       </Fragment>
    )
  }
}

export default Signup;