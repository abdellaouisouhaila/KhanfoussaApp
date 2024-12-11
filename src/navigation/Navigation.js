import { StyleSheet, View, Text, ImageBackground } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const DrawerCont = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/profile_img.jpg")} 
      style={styles.container}
    >
      <View style={styles.overlay}>
        <DrawerItem
          label="Home"
          labelStyle={styles.label}
          onPress={() => {
            navigation.navigate("Home");
            console.log("Home");
          }}
        />
        <DrawerItem
          label="Contact"
          labelStyle={styles.label}
          onPress={() => {
            navigation.navigate("Contact");
            console.log("Contact");
          }}
        />
        <DrawerItem
          label="Profile"
          labelStyle={styles.label}
          onPress={() => {
            navigation.navigate("Profile");
            console.log("Profile");
          }}
        />
        <DrawerItem
          label="Notification"
          labelStyle={styles.label}
          onPress={() => {
            navigation.navigate("Notification");
            console.log("Notification");
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default DrawerCont;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover", // L'image occupe tout l'espace du drawer
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Légère transparence pour le fond
    justifyContent: "center", 
    paddingTop: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // Texte blanc par défaut
  },
  drawerItem: {
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Arrière-plan transparent léger pour chaque item
  },
});
