import React, { useCallback, useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  Button,
  Text,
  Pressable,
  Switch,
} from "react-native";
import styles from "./styles";
import Navbar from "../../components/FinantialMovement/Navbar";
import DateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from "react-native-vector-icons/Ionicons";
import { IFinantialMovement } from "../../@types/IFinantialMovement";

const finantialMovementInitialValue: IFinantialMovement = {
  description: "",
  value: 0,
  date: new Date(),
  type: "income",
  repeat: false,
};

const FinantialMovement = () => {
  const [finantialMovement, setFinantialMovement] =
    useState<IFinantialMovement>(finantialMovementInitialValue);
  const [open, setOpen] = useState(false);

  const handleSaveOnStorage = useCallback(() => {
    alert("Salvo com sucesso");
  }, []);

  const getIncomeBorderColor = () => {
    if (finantialMovement.type === "income") {
      return "#65d067";
    }

    return "#c5c0c9";
  };

  const getOutcomeBorderColor = () => {
    if (finantialMovement.type === "outcome") {
      return "#ff4b5c";
    }

    return "#c5c0c9";
  };

  const handleQuantityChange = (text: string) => {
    setFinantialMovement({
      ...finantialMovement,
      value: Number(text),
    });
  };

  const formatDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <View style={styles.container}>
      <Navbar />

      <ScrollView
        contentContainerStyle={{
          flex: 1,
          marginTop: 20,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={finantialMovement.description}
          onChangeText={(e) => {
            setFinantialMovement({
              ...finantialMovement,
              description: e,
            });
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Valor"
          keyboardType="numeric"
          value={finantialMovement.value.toString()}
          onChangeText={handleQuantityChange}
        />
        <Pressable style={styles.inputDate} onPress={() => setOpen(true)}>
          <Text style={styles.textDate}>
            {formatDate(finantialMovement.date)}
          </Text>
        </Pressable>

        {open && (
          <DateTimePicker
            value={finantialMovement.date}
            mode="date"
            display="default"
            onChange={(_, selectedDate) => {
              setOpen(false);
              if (selectedDate) {
                setFinantialMovement({
                  ...finantialMovement,
                  date: selectedDate,
                });
              }
            }}
          />
        )}

        <View style={styles.typeContainer}>
          <Pressable
            onPress={() =>
              setFinantialMovement({ ...finantialMovement, type: "income" })
            }
            style={[
              styles.incomeButton,
              { borderColor: getIncomeBorderColor() },
            ]}
          >
            <View style={styles.arrowUp}>
              <Ionicons name="arrow-up" size={20} />
            </View>
            <Text>Receita</Text>
          </Pressable>

          <Pressable
            onPress={() =>
              setFinantialMovement({ ...finantialMovement, type: "outcome" })
            }
            style={[
              styles.outcomeButton,
              { borderColor: getOutcomeBorderColor() },
            ]}
          >
            <View style={styles.arrowDown}>
              <Ionicons name="arrow-down" size={20} />
            </View>
            <Text>Despesa</Text>
          </Pressable>
        </View>
        <View style={styles.repeatContainer}>
          <Text style={styles.repeatText}>Repetir</Text>
          <Switch />
        </View>
        <Pressable style={styles.saveButton} onPress={handleSaveOnStorage}>
          <Text style={styles.saveText}>Salvar</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default FinantialMovement;
