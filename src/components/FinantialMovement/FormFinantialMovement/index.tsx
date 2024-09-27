import React from "react";
import styles from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, Pressable, Switch, TextInput } from "react-native";
import { IFinantialMovement } from "../../../@types/IFinantialMovement";
import { RadioButton } from "react-native-paper";

type FormFinantialMovementProps = {
  finantialMovement: IFinantialMovement;
  setFinantialMovement: React.Dispatch<React.SetStateAction<IFinantialMovement>>;
  handleSaveOnStorage: (movement: IFinantialMovement) => void;
  formatQuantityValue: () => string;
  handleQuantityChange: (key: string) => void;
  handleChangeRepeat: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  getIncomeBorderColor: () => string;
  getOutcomeBorderColor: () => string;
}

const FormFinantialMovement = ({
  finantialMovement, 
  handleSaveOnStorage, 
  setFinantialMovement, 
  handleChangeRepeat, 
  handleQuantityChange, 
  formatQuantityValue, 
  setOpen, 
  open, 
  getIncomeBorderColor, 
  getOutcomeBorderColor
}: FormFinantialMovementProps) => {

  const formatDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };
  
  return (
    <View style={styles.formContainer}>
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
        value={formatQuantityValue()}
        onKeyPress={(e) => handleQuantityChange(e.nativeEvent.key)}
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
          onPress={() => setFinantialMovement({ ...finantialMovement, type: "income" })}
          style={[styles.incomeButton, { borderColor: getIncomeBorderColor() }]}
        >
          <View style={styles.arrowUp}>
            <Ionicons name="arrow-up" size={20} />
          </View>
          <Text>Receita</Text>
        </Pressable>

        <Pressable
          onPress={() => setFinantialMovement({ ...finantialMovement, type: "outcome" })}
          style={[styles.outcomeButton, { borderColor: getOutcomeBorderColor() }]}
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
            onChangeText={(e) => setFinantialMovement({ ...finantialMovement, repeatTimes: Number(e) })}
          />
        </View>
      )}

      <Pressable style={styles.saveButton} onPress={() => handleSaveOnStorage(finantialMovement)}>
        <Text style={styles.saveText}>Salvar</Text>
      </Pressable>
    </View>
  )
};

export default FormFinantialMovement;
