import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import { intervalOptions } from './option-interval.data';

type Props = {
  setSelectedInterval: (args0: any) => void;
};

export function IntervalOptions({ setSelectedInterval }: Props) {
  const animatedComponents = makeAnimated();
  return (
    <Select
      components={animatedComponents}
      options={intervalOptions}
      onChange={(e: any) => setSelectedInterval([e.value])}
    />
  );
}
