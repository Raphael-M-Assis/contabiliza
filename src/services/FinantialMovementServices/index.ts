import AsyncStorage from "@react-native-async-storage/async-storage";
import { IFinantialMovement } from "../../@types/IFinantialMovement";

type FinantialMovementsStorageType = {
  movements: IFinantialMovement[];
};

const FINANTIAL_MOVEMENTS_KEY = "@finantial-movements";

export const getMovementsService =
  async (): Promise<FinantialMovementsStorageType> => {
    try {
      const movements = await AsyncStorage.getItem(FINANTIAL_MOVEMENTS_KEY);

      return movements ? JSON.parse(movements) : { movements: [] };
    } catch (error) {
      console.error("Erro ao buscar movimentos:", error);
      throw error;
    }
  };

export const getMovementsByMouthService = async (date: Date) => {
  try {
    const finantialMovements = await getMovementsService();

    return finantialMovements.movements.filter((movement) => {
      const movementDate = new Date(movement.date);
      return (
        movementDate.getMonth() === date.getMonth() &&
        movementDate.getFullYear() === date.getFullYear()
      );
    });
  } catch (error) {
    console.error("Erro ao buscar movimentos do mês:", error);
    throw error;
  }
};

export const createMovementService = async (movement: IFinantialMovement) => {
  try {
    const finantialMovements = await getMovementsService();

    finantialMovements.movements.push(movement);

    await AsyncStorage.setItem(
      FINANTIAL_MOVEMENTS_KEY,
      JSON.stringify(finantialMovements)
    );
  } catch (error) {
    console.error("Erro ao salvar movimento:", error);
    throw error;
  }
};
