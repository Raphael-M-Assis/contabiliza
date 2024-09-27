import React, { useCallback, useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  Button,
  Text,
  Pressable,
  Switch,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import Navbar from "../../components/FinantialMovement/Navbar";
import DateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from "react-native-vector-icons/Ionicons";
import { IFinantialMovement } from "../../@types/IFinantialMovement";
import { RadioButton } from "react-native-paper";

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

  const formatDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

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
          <Switch 
            onChange={handleChangeRepeat} 
            value={finantialMovement.repeat} 
            thumbColor={finantialMovement.repeat ? "#175560" : "#777"}
            style={styles.switch}
          />

        </View>
        {finantialMovement.repeat && (
          <View style={styles.repeatNumberContainer}>
            <View style={styles.choiceContainer}>
              <Text style={styles.choiceText}>Fixo</Text>
              <View style={styles.radioButtonContainer}>
                <RadioButton
                  value="fixo"
                  status={ finantialMovement.allMonths ? 'checked' : 'unchecked' }
                  onPress={() => setFinantialMovement({...finantialMovement, allMonths: true})}
                  color="#175560"
                />
              </View>
            </View>
            
            <View style={styles.choiceContainer}>
              <Text style={styles.choiceText}>Parcelado</Text>
              <View style={styles.radioButtonContainer}>
                <RadioButton 
                  value="parcelado"
                  status={ !finantialMovement.allMonths ? 'checked' : 'unchecked' }
                  onPress={() => setFinantialMovement({...finantialMovement, allMonths: false})}
                  color="#175560"
                />
              </View>
            </View>
          </View>
        )}

        {finantialMovement.repeat && !finantialMovement.allMonths && (
          <View style={styles.repeatNumberContainer}>
            <TextInput
              placeholder="Quantidade de vezes"
              style={styles.inputQuantity}
              keyboardType="numeric"
              value={finantialMovement.repeatTimes?.toString() === '0' ? '' : finantialMovement.repeatTimes?.toString()}
              onChangeText={(e) => {
                setFinantialMovement({
                  ...finantialMovement,
                  repeatTimes: Number(e),
                });
              }}
            />
          </View>
        )}

        <Pressable style={styles.saveButton} onPress={handleSaveOnStorage}>
          <Text style={styles.saveText}>Salvar</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FinantialMovement;
