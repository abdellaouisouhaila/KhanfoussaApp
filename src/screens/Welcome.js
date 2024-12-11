import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/khanfousset.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Bienvenue au Khanfousset Club !</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Login to join our club khanfoussa"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent overlay pour rendre le texte visible
    padding: 34,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold', // Texte en gras
    textAlign: 'center', // Centré horizontalement
    color: '#000', // Noir
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
});

export default Welcome;
