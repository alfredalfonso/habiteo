import { HBTAvatarDropdown } from '@components/hbt-avatar-dropdown';
import { HBTLanding } from '@components/hbt-landing';
import { HBTNavbar } from '@components/hbt-navbar';
import { HBTNavbarRightDefault } from '@components/hbt-navbar-right-default';
import { HBTUserHome } from '@components/hbt-user-home';
import Container from 'react-bootstrap/Container';
import Cookies from 'universal-cookie';

export function Root() {
  const cookies = new Cookies();

  return (
    <>
      {cookies.get('access-token') ? (
        <>
          <HBTNavbar right={<HBTAvatarDropdown />} />
          <Container className="mt-4">
            <HBTUserHome />
          </Container>{' '}
        </>
      ) : (
        <>
          <HBTNavbar right={<HBTNavbarRightDefault />} />
          <Container className="mt-4">
            <HBTLanding />
          </Container>{' '}
        </>
      )}
    </>
  );
}
