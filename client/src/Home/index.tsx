import { Container } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { HBTNavbar } from './components/HBTNavbar';
import { UserHome } from './UserHome';
import { HBTLanding } from './Landing';
import { HBTAvatar } from './UserHome/HBTAvatar';
import { HBTNavbarRight } from './Landing/HBTNavbarRight';

export const Home = () => {
  const cookies = new Cookies();

  return (
    <>
      {cookies.get('Example') ? (
        <>
          <HBTNavbar right={<HBTAvatar />} />
          <Container className="mt-4">
            <UserHome />
          </Container>{' '}
        </>
      ) : (
        <>
          <HBTNavbar right={<HBTNavbarRight />} />
          <Container className="mt-4">
            <HBTLanding />
          </Container>{' '}
        </>
      )}
    </>
  );
};
