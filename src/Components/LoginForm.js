import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';

export default class LoginForm extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      barStyle="light-content" />
      <TextInput 
      style={styles.input} 
      placeholder='username' 
      placeholderTextColor="rgba(255,255,255,0.8)"
      returnKeyType='next'
      onSubmitEditing= {() => this.passwordInput.focus()}
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false} />

      <TextInput 
      style={styles.input} 
      placeholder='password' 
      placeholderTextColor="rgba(255,255,255,0.8)"
      returnKeyType='go'
      secureTextEntry
      ref={(input) => this.passwordInput = input} />

      <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:20,
  },
  input: {
    height: 50,
    backgroundColor: '#E67E22',
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#fff',
  },
  buttonContainer: {
    backgroundColor: '#1F3A93',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
  },
});
