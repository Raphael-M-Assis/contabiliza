import React, { useCallback, useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Home/Footer";
import { IFinantialMovement } from "../../@types/IFinantialMovement";
import { getMovementsByMouthService } from "../../services/FinantialMovementServices";

const getCurrentMonthIndex = (): number => {
  return new Date().getMonth();
};

const getCurrentYearIndex = (): number => {
  return new Date().getFullYear();
};

const Home = () => {
  const [year, setYear] = useState<number>(getCurrentYearIndex());
  const [month, setMonth] = useState<number>(getCurrentMonthIndex());
  const [movements, setMovements] = useState<IFinantialMovement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleMonthChange = useCallback((newMonth: number) => {
    if (newMonth >= 0 && newMonth <= 11) {
      setMonth(newMonth);
    }
  }, []);

  const handleYearChange = useCallback((newYear: number) => {
    setYear(newYear);
  }, []);

  //Callbacks
  const loadingMovements = useCallback(async () => {
    const mouthMovements = await getMovementsByMouthService(new Date(year, month));
    setMovements(mouthMovements);
  }, [year, month])

  const loadingData = useCallback(async () => {
    await Promise.all([loadingMovements()])
  }, [loadingMovements]);

  //Effects
  useEffect(() => {
    loadingData()
  }, [])

  return (
    <View style={styles.container}>
      <Navbar
        month={month}
        year={year}
        handleMonthChange={handleMonthChange}
        handleYearChange={handleYearChange}
      />

      {loading ? (
          <View style={styles.containerLoading}>
            <ActivityIndicator animating={true} size="large" color="#224aea" />
          </View>
        )
      : 
        <View>
          {movements && movements.map((movement) => (
            <View key={movement.description}>
              <Text>{movement.description}</Text>
              <Text>{movement.value}</Text>
            </View>
          ))}
        </View>
      }

      <Footer saldo={100} saldoPrevisto={200} />
    </View>
  );
};

export default Home;
