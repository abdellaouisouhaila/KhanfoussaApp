import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Fond blanc pour un design épuré
    padding: 20,
  },
  title: {
    fontSize: 28, // Augmentation de la taille pour un titre plus frappant
    fontWeight: "bold",
    marginBottom: 30,
    color: "#D32F2F", // Rouge vif pour le titre
    textAlign: "center", // Centrage du titre
  },
  button: {
    paddingHorizontal: 24, // Plus d'espace horizontal pour les boutons
    paddingVertical: 12, // Plus de padding pour rendre le bouton plus cliquable
    backgroundColor: "#D32F2F", // Rouge vif pour les boutons
    borderRadius: 8, // Bordures arrondies pour un design plus moderne
    elevation: 3, // Légère ombre pour un effet 3D
    marginTop: 20, // Espacement entre les éléments
  },
  buttonText: {
    color: "#FFFFFF", // Texte en blanc pour ressortir sur le rouge
    fontSize: 16,
    fontWeight: "600", // Poids du texte pour le rendre plus visible
    textAlign: "center", // Centrage du texte
  },
});
