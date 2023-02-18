import { Button } from 'react-bootstrap';
import { BsCheckLg } from 'react-icons/bs';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { createHabitLog } from '../api/create-habit-log.api';
import { HabitLog } from '../types/habit-log.type';

type Props = {
  input: Omit<HabitLog, 'id' | 'createdAt' | 'updatedAt'>;
  isDone?: boolean;
};

export function HBTButtonLog({ input, isDone }: Props) {
  const queryClient = useQueryClient();

  const sessionMutation = useMutation(createHabitLog, {
    onSuccess: () => {
      queryClient.invalidateQueries(['habits']);
    },
  });

  function handleLogHabit(
    input: Omit<HabitLog, 'id' | 'createdAt' | 'updatedAt'>
  ) {
    // console.log(input);
    sessionMutation.mutate(input);
  }

  return !isDone ? (
    <Button
      variant="secondary"
      onClick={() =>
        handleLogHabit({ habitId: input.habitId, value: input.value })
      }
    >
      Done
    </Button>
  ) : (
    <BsCheckLg color="green" />
  );
}
