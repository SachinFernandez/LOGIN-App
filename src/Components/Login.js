import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component<Props> {
  render() {
    return (
      <KeyboardAvoidingView behaviour="padding" style={styles.container}>

      <View style={styles.logoContainer}>
      <Text style={styles.title}> L O G I N  P A G E </Text>
      <Image style={styles.logo} source={require('../Images/sachin-1.png')} />
      <Text style={styles.logoText}>You can be anything.</Text> 
      </View>

      <View style={styles.formContainer}>
      <LoginForm />
      </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  logoContainer: {
    flexGrow:1, 
    backgroundColor: '#9A12B3',
    alignItems: 'center',
    justifyContent:'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#E4F1FE',
    bottom:50,
  },
  logo: {
    width: 100,
    height:100,
    justifyContent:'center',
    backgroundColor: '#fff',
  },
  logoText: {
    fontSize:10,
    textAlign:'center',
    opacity:0.8,
    top: 5,
    color: '#fff',
  },
  formContainer: {
    flex: 1,   
    backgroundColor: '#E9D460',
  },
});
