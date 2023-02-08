import Cookies from 'universal-cookie';
import { HabiteoMain } from './HabiteoMain';
import { Landing } from './Landing';

export const Home = () => {
  const cookies = new Cookies();
  return cookies.get('Example') ? <HabiteoMain /> : <Landing />;
};
