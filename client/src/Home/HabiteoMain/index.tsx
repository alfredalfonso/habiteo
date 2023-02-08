import { Navbar, NavbarBrand, NavItem, NavLink } from 'react-bootstrap';

export function HabiteoMain() {
  return (
    <>
      <Navbar bg="light" className="d-flex ">
        <NavbarBrand>Habiteo</NavbarBrand>
        <NavItem>
          <NavLink>Link1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link3</NavLink>
        </NavItem>
      </Navbar>
      <h1>You are logged in HabiteoMain</h1>;
    </>
  );
}
