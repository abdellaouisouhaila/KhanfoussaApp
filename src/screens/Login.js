import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/userSlice';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password') {
      dispatch(login({ name: 'John Doe', email }));
      navigation.navigate('Home');
    } else {
      Alert.alert('Erreur', 'Email ou mot de passe incorrect');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/login_img.jpg')} 
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="#ccc"
        />
        <TextInput
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#ccc"
        />
        <View style={styles.button}>
          <Button title="Se connecter" color="#B71C1C" onPress={handleLogin} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    opacity: 0.5,
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#B71C1C',
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
});

export default Login;
