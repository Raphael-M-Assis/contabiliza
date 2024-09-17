import React, { useCallback, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleHomePage = useCallback(() => {
    navigation.navigate("home");
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerArrow}>
        <Pressable onPress={handleHomePage} style={styles.arrowButton}>
          <Ionicons name="arrow-back" size={25} color={"#FFF"} />
        </Pressable>

        <Text style={styles.title}>Movimentações Financeiras</Text>
      </View>
    </View>
  );
};

export default Navbar;
