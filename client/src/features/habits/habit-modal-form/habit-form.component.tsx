import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row, Stack } from 'react-bootstrap';
import React, { useState } from 'react';
import { DailyOptions } from './option-daily/option-daily.component';
import { IntervalOptions } from './option-interval/option-interval.component';
import { createHabitInput } from './habit-types';

type Props = {
  handleCloseModal?: () => void;
  onSubmit: (input: createHabitInput) => void;
};

export function HBTHabitForm({ handleCloseModal, onSubmit }: Props) {
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('daily');
  const [option, setOption] = useState([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newHabit: createHabitInput = {
      name: name,
      unit: unit,
      value: value,
      recurrence: {
        type: type,
        option: option,
      },
    };

    onSubmit(newHabit);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Col>
          <Form.Group className="mb-3" controlId="formUnit">
            <Form.Label>Unit</Form.Label>
            <Form.Control
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formType">
            <Form.Label>Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="daily">Daily</option>
              <option value="interval">Interval</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formValue">
            <Form.Label>Value</Form.Label>
            <Form.Control
              type="number"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formOptions">
            <Form.Label>Options</Form.Label>
            {type == 'daily' ? (
              <DailyOptions setSelectedWeekdays={setOption} />
            ) : (
              <IntervalOptions setSelectedInterval={setOption} />
            )}
          </Form.Group>
        </Col>
      </Row>

      <Stack direction="horizontal" gap={2} className="mt-3">
        <Button variant="primary" type="submit" onClick={handleCloseModal}>
          Create
        </Button>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cancel
        </Button>
      </Stack>
    </Form>
  );
}
