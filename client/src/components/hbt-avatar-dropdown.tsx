import Dropdown from 'react-bootstrap/Dropdown';
import Cookies from 'universal-cookie';

function handleLogout() {
  const cookies = new Cookies();
  cookies.remove('access-token');
  cookies.remove('refresh-token');
}

export function HBTAvatarDropdown() {
  return (
    <div className="flex-shrink-0 dropdown">
      <Dropdown>
        <Dropdown.Toggle
          variant="light"
          className="d-block text-decoration-none"
        >
          <img
            src="https://github.com/alfredalfonso.png"
            alt="mdo"
            width="32"
            height="32"
            className="rounded-circle"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Settings</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
          <hr />
          <Dropdown.Item href="/login" onClick={handleLogout}>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
