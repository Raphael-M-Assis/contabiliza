export type IFinantialMovement = {
  description: string;
  value: number;
  date: Date;
  type: "income" | "outcome";
  repeat: boolean;
  allMonths?: boolean;
  fixedRepeat?: boolean;
  repeatTimes?: number;
};
