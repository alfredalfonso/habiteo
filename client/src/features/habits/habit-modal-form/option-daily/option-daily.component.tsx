import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { weekdaysOption } from './option-daily.data';

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
