import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const LoginScreens = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.inputWrapper}>
          <Icon 
            name="user" 
            size={20} 
            color="#FFFFFF" 
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor="#FFFFFF"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Icon 
            name="lock" 
            size={20} 
            color="#FFFFFF" 
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#FFFFFF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
      </View>

      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#192338',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
  },
  inputsContainer: {
    backgroundColor: 'rgba(70, 70, 70, 0.7)',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#808080',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#FFFFFF',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#5A4FCF',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, 
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
 
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 5,
  },
  forgotPasswordText: {
    color: '#FFFFFF',
    fontSize: 14, 
    fontWeight: 'bold',
  },
});

export default LoginScreens;
