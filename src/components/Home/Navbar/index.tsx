import React, { useCallback, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

type NavbarProps = {
  month: number;
  year: number;
  handleMonthChange: (month: number) => void;
  handleYearChange: (year: number) => void;
};

const Navbar = ({
  month,
  year,
  handleMonthChange,
  handleYearChange,
}: NavbarProps) => {
  const goToNextMonth = useCallback(() => {
    let newMonth = (month + 1) % 12;
    let newYear = year;

    if (newMonth === 0) {
      newYear += 1;
    }

    handleMonthChange(newMonth);

    if (newYear !== year) handleYearChange(newYear);
  }, [month, year, handleMonthChange, handleYearChange]);

  const goToPreviousMonth = useCallback(() => {
    let newMonth = (month - 1 + 12) % 12;
    let newYear = year;

    if (newMonth === 11) {
      newYear -= 1;
    }

    handleMonthChange(newMonth);

    if (newYear !== year) handleYearChange(newYear);
  }, [month, year, handleMonthChange, handleYearChange]);

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Minhas Despesas Online</Text>
      </View>

      <View style={styles.pickerContainer}>
        <Pressable onPress={goToPreviousMonth} style={styles.arrowButton}>
          <Ionicons name="arrow-back" size={20} />
        </Pressable>

        <Text style={styles.period}>{months[month] + "/" + year}</Text>

        <Pressable onPress={goToNextMonth} style={styles.arrowButton}>
          <Ionicons name="arrow-forward" size={20} />
        </Pressable>
      </View>
    </View>
  );
};

export default Navbar;
