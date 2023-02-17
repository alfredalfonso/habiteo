export interface Habit {
  id: number | undefined;
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

export type CreateHabitInput = Omit<Habit, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateHabitInput = Omit<Habit, 'createdAt' | 'updatedAt'>;
