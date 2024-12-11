import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import * as Animatable from "react-native-animatable";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert("Erreur", "Tous les champs sont obligatoires");
      return;
    }

    // Simule l'envoi du formulaire
    Alert.alert("Message envoyé", "Votre message a été envoyé avec succès");
  };

  return (
    <Animatable.View
      animation="fadeIn" // Animation d'apparition
      duration={1000}
      style={styles.container}
    >
      <Animatable.Text animation="bounceInDown" style={styles.title} delay={500}>
        Feel free khanfoussa
      </Animatable.Text>
      <Animatable.View
        animation="fadeInUp" // Animation de montée
        delay={1000}
        duration={1500}
        style={styles.formContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Votre nom"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Votre email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, { height: 120 }]} // Augmenter la hauteur pour le message
          placeholder="Votre message"
          placeholderTextColor="#999"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
        />
        <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Envoyer</Text>
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </Animatable.View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Fond noir pour toute l'écran
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF3B30", // Rouge vif pour le titre
    marginBottom: 30,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#222", // Fond noir-gris pour le formulaire
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
  },
  input: {
    height: 50,
    borderColor: "#FF3B30", // Bordure rouge pour chaque champ
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    color: "#fff", // Texte en blanc pour plus de lisibilité
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FF3B30", // Rouge pour le bouton
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Ombre pour donner un effet de profondeur
  },
  buttonText: {
    color: "#fff", // Texte en blanc
    fontSize: 18,
    fontWeight: "bold",
  },
});
