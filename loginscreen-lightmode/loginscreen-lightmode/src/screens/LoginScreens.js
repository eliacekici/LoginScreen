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
          source={require('../../assets/logolm.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.inputWrapper}>
          <Icon 
            name="user" 
            size={20} 
            color="#333" 
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor="#333"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Icon 
            name="lock" 
            size={20} 
            color="#333" 
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#333"
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
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#E0E0E0', 
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: '#ccc', 
},
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D6D6D6', 
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
    backgroundColor: '#342b94',
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
    color: '#71797E',
    fontSize: 14, 
    fontWeight: 'bold',
  },
});

export default LoginScreens;