import React, { useEffect } from "react";
import { View, Alert, ImageBackground } from "react-native";
import { Button, Text } from "react-native-paper";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions"; // Pour la gestion des permissions
import { useTheme } from "../../contexts/ThemeContext"; 

import styles from "./style"; // Vos styles personnalisés

// Configurer le comportement des notifications (bannières, sons, vibrations, etc.)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const Notification = () => {
  const { colors } = useTheme();

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      if (status !== "granted") {
        const { status: newStatus } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (newStatus !== "granted") {
          Alert.alert("Erreur", "Les permissions pour les notifications ne sont pas accordées.");
          return;
        }
      }
      console.log("Permissions accordées pour les notifications");
    };

    requestPermissions();
  }, []);

  const sendImmediateNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Notification Immédiate",
        body: "Cette notification a été envoyée immédiatement.",
        sound: true,
      },
      trigger: null, // Envoi immédiat
    });
    Alert.alert("Notification Envoyée", "Une notification locale a été déclenchée.");
  };


  return (
    <ImageBackground
    source={require("../../assets/notif_img.jpg")} 
    style={[styles.container, { backgroundColor: colors.background }]} 
  >
      <Text style={[styles.title, { color: colors.text }]}>
        Notifications
      </Text>
      
      <Button
        mode="contained"
        onPress={sendImmediateNotification}
        style={[styles.button, { backgroundColor: '#000' }]} 
        >
        Envoyer Notification Immédiate
      </Button>
    </ImageBackground>
  );
};

export default Notification;

