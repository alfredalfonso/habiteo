import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { intervalOptions } from './option-interval.data';

type Props = {
  setSelectedInterval: (args0: any) => void;
  defaultSelectedInterval: number[];
};

export function IntervalOptions({
  setSelectedInterval,
  defaultSelectedInterval,
}: Props) {
  const animatedComponents = makeAnimated();
  return (
    <Select
      components={animatedComponents}
      options={intervalOptions}
      defaultValue={intervalOptions.filter(
        (interval) => interval.value == defaultSelectedInterval[0]
      )}
      onChange={(e: any) => setSelectedInterval([e.value])}
    />
  );
}
