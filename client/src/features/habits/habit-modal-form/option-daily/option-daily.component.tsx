import { useState } from 'react';
import Select, { MultiValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import { weekdaysOption } from './option-daily.data';

type Props = {
  setSelectedWeekdays: (args0: any) => void;
};

export function DailyOptions({ setSelectedWeekdays }: Props) {
  // console.log(selectedWeekdays?.map((weekday: any) => weekday.value));
  const animatedComponents = makeAnimated();
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={weekdaysOption}
      onChange={(e) =>
        setSelectedWeekdays(e.map((weekday: any) => weekday.value))
      }
    />
  );
}
