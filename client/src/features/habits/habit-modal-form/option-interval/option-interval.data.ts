export interface IntervalsOption {
  readonly value: number;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const intervalOptions: readonly IntervalsOption[] = [
  { value: 2, label: 'Every 2 days' },
  { value: 3, label: 'Every 3 days' },
  { value: 4, label: 'Every 4 days' },
  { value: 5, label: 'Every 5 days' },
  { value: 6, label: 'Every 6 days' },
  { value: 7, label: 'Every 7 days' },
];
