import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarContainer = () => {
  return (
    <Navbar className="bg-primary">
      <Container>
        <Navbar.Brand href="#home" className='text-light'>Car$Show</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-light'>
           Sam Oye
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;