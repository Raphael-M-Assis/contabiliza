import React from "react";
import { View, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFPercentage } from "react-native-responsive-fontsize";
import Home from "../pages/home";
import { RootStackParamList } from "./RootStackParams";
import { enableScreens } from "react-native-screens";
import FinantialMovement from "../pages/finantialMovement";

enableScreens();

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

// const Tabs = () => (
//   <Tab.Navigator
//     initialRouteName="home"
//     screenOptions={({ route }) => ({
//       tabBarActiveTintColor: "#224aea",
//       tabBarStyle: { justifyContent: "center", padding: 10, marginBottom: 0 },
//       tabBarIcon: ({ color, size }) => {
//         let iconName: string = "";

//         if (route.name === "home") {
//           iconName = "home";
//         } else if (route.name === "logout") {
//           iconName = "log-out";
//         }

//         return <Ionicons name={iconName} color={color} size={size} />;
//       },
//     })}
//   >
//     <Tab.Screen
//       name="home"
//       component={Home}
//       options={{
//         title: "",
//         headerShown: false,
//       }}
//     />
//   </Tab.Navigator>
// );

export const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />

      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontFamily: "Poppins_400Regular",
            fontSize: RFPercentage(2.6),
          },
        }}
      >
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="finantialMovement"
          component={FinantialMovement}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="tabs"
          component={Tabs}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
