export type IFinantialMovement = {
  description: string;
  value: number;
  date: Date;
  type: "income" | "outcome";
  repeat: boolean;
  fixedRepeat?: boolean;
  repeatTimes?: number;
};
