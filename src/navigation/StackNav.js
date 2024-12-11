import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import Profile from '../screens/Profile';
import Notification from '../screens/notification/Notification';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';



const StackNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      //   screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />


    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
