export interface HabitLog {
  id: number;
  habitId: number | undefined;
  value: number;
  createdAt: string;
  updatedAt: string;
}
