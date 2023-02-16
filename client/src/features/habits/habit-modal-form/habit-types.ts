export interface Habit {
  name: string;
  unit: string;
  value: number;
  recurrence: {
    type: string;
    option: number[];
  };
}
