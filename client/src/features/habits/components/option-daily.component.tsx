import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export interface WeekdaysOption {
  readonly value: number;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const weekdaysOption: readonly WeekdaysOption[] = [
  { value: 0, label: 'Sunday' },
  { value: 1, label: 'Monday' },
  { value: 2, label: 'Tuesday' },
  { value: 3, label: 'Wednesday' },
  { value: 4, label: 'Thursday' },
  { value: 5, label: 'Friday' },
  { value: 6, label: 'Saturday' },
];

type Props = {
  setSelectedWeekdays: (args0: any) => void;
  defaultSelectedWeekdays: number[];
};

export function DailyOptions({
  setSelectedWeekdays,
  defaultSelectedWeekdays,
}: Props) {
  const animatedComponents = makeAnimated();
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      defaultValue={defaultSelectedWeekdays.map((days) => weekdaysOption[days])}
      options={weekdaysOption}
      onChange={(e) =>
        setSelectedWeekdays(e.map((weekday: any) => weekday.value))
      }
    />
  );
}
