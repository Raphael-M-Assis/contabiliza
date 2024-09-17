import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Pressable, BackHandler, Alert } from "react-native";
import styles from "./styles";
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Home/Footer";

const getCurrentMonthIndex = (): number => {
  return new Date().getMonth();
};

const getCurrentYearIndex = (): number => {
  return new Date().getFullYear();
};

const Home = () => {
  const [year, setYear] = useState<number>(getCurrentYearIndex());
  const [month, setMonth] = useState<number>(getCurrentMonthIndex());

  const handleMonthChange = useCallback((newMonth: number) => {
    if (newMonth >= 0 && newMonth <= 11) {
      setMonth(newMonth);
    }
  }, []);

  const handleYearChange = useCallback((newYear: number) => {
    setYear(newYear);
  }, []);
  return (
    <View style={styles.container}>
      <Navbar
        month={month}
        year={year}
        handleMonthChange={handleMonthChange}
        handleYearChange={handleYearChange}
      />

      <Footer saldo={100} saldoPrevisto={200} />
    </View>
  );
};

export default Home;
