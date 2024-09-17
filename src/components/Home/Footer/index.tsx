import React, { useCallback, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";

type FooterProps = {
  saldoPrevisto: number;
  saldo: number;
};

type AuthScreenProp = StackNavigationProp<RootStackParamList, "home">;

const Footer = ({ saldo, saldoPrevisto }: FooterProps) => {
  const navigation = useNavigation<AuthScreenProp>();

  const handleFinantialMovement = useCallback(() => {
    navigation.navigate("finantialMovement");
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleFinantialMovement}
        style={styles.finantialMovement}
      >
        <Ionicons name="add-outline" size={30} />
      </Pressable>

      <View style={styles.details}>
        <View style={styles.expectedBalanceDetails}>
          <Text style={styles.expectedbalanceTextDetails}>Saldo Previsto</Text>
          <Text style={styles.expectedbalanceTextDetails}>
            R$ {saldoPrevisto.toFixed(2)}
          </Text>
        </View>

        <View style={styles.balanceDetails}>
          <Text style={styles.balanceTextDetails}>Saldo</Text>
          <Text style={styles.balanceTextDetails}>R$ {saldo.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;
