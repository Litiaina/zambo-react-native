import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, ImageBackground } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentScreen, setCurrentScreen] = useState('login');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      Alert.alert('Login Successful');
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  const handleRegister = () => {
    setCurrentScreen('register');
  };

  const handleGoBack = () => {
    setCurrentScreen('login');
  };

  return (
    <ImageBackground source={require('./assets/Litiaina_Cover_Art.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {currentScreen === 'login' ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="white"
              onChangeText={text => setUsername(text)}
              value={username}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <Button title="Login" onPress={handleLogin} style={styles.button} color="grey" />
            <View style={styles.gap} />
            <Button title="Register" onPress={handleRegister} style={styles.button} color="grey" />
          </>
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="white"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="white"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="white"
              secureTextEntry
            />
            <Button title="Register" onPress={handleGoBack} style={styles.button} color="grey" />
          </>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 10,
    color: 'white',
  },
  button: {
    width: '100%',
    marginTop: 12,
  },
  gap: {
    height: 16,
  },
});

export default App;
