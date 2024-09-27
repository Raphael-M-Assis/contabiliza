import React, { useCallback, useState } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styles from "./styles";
import Navbar from "../../components/FinantialMovement/Navbar";
import { IFinantialMovement } from "../../@types/IFinantialMovement";
import { createMovementService } from "../../services/FinantialMovementServices";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/RootStackParams";
import { showToast } from "../../components/Toast";
import Toast from "react-native-toast-message";
import FormFinantialMovement from "../../components/FinantialMovement/FormFinantialMovement";

const finantialMovementInitialValue: IFinantialMovement = {
  description: "",
  value: 0,
  date: new Date(),
  type: "income",
  repeat: false,
};

type AuthScreenProp = StackNavigationProp<RootStackParamList, "finantialMovement">;

const FinantialMovement = () => {
  const navigation = useNavigation<AuthScreenProp>();

  const [finantialMovement, setFinantialMovement] = useState<IFinantialMovement>(finantialMovementInitialValue);
  const [open, setOpen] = useState(false);

  const handleSaveOnStorage = useCallback(async (movement: IFinantialMovement) => {
    if (!movement.description.trim()) {

      const message = "Descrição é obrigatória" + movement.description;
      return showToast("info", "Atenção", message);
    }
  
    if (isNaN(movement.value) || movement.value <= 0) {
      return showToast("info", "Atenção", "O valor deve ser maior que 0");
    }

    await createMovementService(movement);
    setFinantialMovement(finantialMovementInitialValue);

    navigation.navigate("home");
  }, []);

  const getIncomeBorderColor = () => {
    return finantialMovement.type === "income" ? "#65d067" : "#c5c0c9";
  };

  const getOutcomeBorderColor = () => {
    return finantialMovement.type === "outcome" ? "#ff4b5c" : "#c5c0c9";
  };

  const handleQuantityChange = (text: string) => {
    let newValue = finantialMovement.value.toString().replace(".", "");
  
    if (text === "Backspace") {
      newValue = newValue.slice(0, newValue.length - 1);
    } else {
      newValue = newValue + text;
    }
  
    setFinantialMovement({
      ...finantialMovement,
      value: newValue ? parseFloat(newValue) / 100 : 0,
    });
  };

  const formatQuantityValue = () => {
    return finantialMovement.value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  const handleChangeRepeat = () => {
    if (finantialMovement.repeat) {
      setFinantialMovement({
        ...finantialMovement,
        repeat: false,
        allMonths: false,
        repeatTimes: 0,
      });
    } else {
      setFinantialMovement({
        ...finantialMovement,
        repeat: true,
        allMonths: true,
        repeatTimes: 0,
      });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />

      <ScrollView
        contentContainerStyle={{
          flex: 1,
          marginTop: 20,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <FormFinantialMovement 
          finantialMovement={finantialMovement} 
          setFinantialMovement={setFinantialMovement} 
          handleSaveOnStorage={handleSaveOnStorage} 
          formatQuantityValue={formatQuantityValue}
          handleQuantityChange={handleQuantityChange}
          handleChangeRepeat={handleChangeRepeat}
          getIncomeBorderColor={getIncomeBorderColor}
          getOutcomeBorderColor={getOutcomeBorderColor}
          open={open}
          setOpen={setOpen}
          />
      </ScrollView>

      <Toast />
    </SafeAreaView>
  );
};

export default FinantialMovement;
