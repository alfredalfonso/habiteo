export interface Habit {
  id: number;
  name: string;
  unit: string;
  value: number;
  recurrence: {
    type: string;
    option: number[];
  };
  createdAt: string;
  updatedAt: string;
}
