import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated } from 'react-native';

const Home = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Valeur animée pour le fondu

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Opacité cible
      duration: 2000, // Durée en ms
      useNativeDriver: true, // Amélioration des performances
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ImageBackground
        source={require('../assets/Coccinelle.jpg')}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Asslema khanfoussa</Text>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Une superposition semi-transparente
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Home;
