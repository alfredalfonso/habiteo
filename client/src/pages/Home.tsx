import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

export const Home = () => {
  const cookies = new Cookies();
  return (
    <>
      {cookies.get('Example') ? (
        <h1>You are logged in!</h1>
      ) : (
        <h1>Landing Page</h1>
      )}
    </>
  );
};
