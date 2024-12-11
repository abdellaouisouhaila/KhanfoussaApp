import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import {
  CameraView,
  Camera,
} from "expo-camera";
const Profile = () => {
  const [hasCamPerm, sethasCamPerm] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraView.defaultProps.facing);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      sethasCamPerm(cameraStatus.status === "granted");
    })();
  }, []);
  const flipCam = () => {
    setType(type === "back" ? "front" : "back");
  };
  const takeAPic = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const savePic = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert("Image saved");
        setImage(null);
      } catch (error) {
        console.log(err);
      }
    }
  };
  if (hasCamPerm === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
      source={require("../assets/profile_img.jpg")} // Remplacez cette ligne par votre image de fond
      style={styles.container}
    >
      {!image ? (
        <CameraView style={styles.camera} facing={type} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={flipCam}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takeAPic}>
              <Text style={styles.text}>Take a pic</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <Image style={styles.camera} source={{ uri: image }} />
      )}
      {image && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setImage(null);
            }}
          >
            <Text style={styles.text}>New Img</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={savePic}>
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
      </ImageBackground>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#f0f0f0", // Lighter background color for contrast
    },
    message: {
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
      color: "#ff4c4c", // Red color to indicate error or no access
    },
    camera: {
      flex: 1,
      borderRadius: 10, // Rounded corners for the camera preview
      margin: 20,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 20,
      position: "absolute",
      bottom: 40,
      width: "100%",
    },
    button: {
      flex: 1,
      alignItems: "center",
      paddingVertical: 15,
      borderRadius: 10,
      marginHorizontal: 10,
      opacity: 0.8,
    },
    flipButton: {
      backgroundColor: "#007bff", // Blue for flip camera
    },
    captureButton: {
      backgroundColor: "#28a745", // Green for capture button
    },
    newImageButton: {
      backgroundColor: "#ffc107", // Yellow for new image
    },
    saveButton: {
      backgroundColor: "#17a2b8", // Teal for save button
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
    },
  });
