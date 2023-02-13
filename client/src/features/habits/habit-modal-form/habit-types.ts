export interface createHabitInput {
  name: string;
  unit: string;
  value: number;
  recurrence: {
    type: string;
    option: number[];
  };
}
