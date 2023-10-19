import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarContainer = () => {
  return (
    <Navbar className="bg-primary">
      <Container>
        <Navbar.Brand href="#home" className='text-light text-5 fw fs-1'>Car$Show</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-light fw fs-3'>
           Sam Oye
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;