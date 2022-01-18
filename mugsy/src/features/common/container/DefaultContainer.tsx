import { BrowserRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Buttons } from '../button/Button';
import { Lander } from '../../views/lander/Lander'
import { LanderCard } from '../cards/landerCard/LanderCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../../assets/styles/global.scss';
import styles from './defaultContainer.module.scss';


export const DefaultContainer: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Navbar expand={false}>
            <Container fluid>
              <Navbar.Toggle className="ms-auto" aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                className={styles.offCanvasContainer}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">Mugsy OS: v0.9</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Brew</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </Row>
        <Row>
          <Lander />
        </Row>
        <Row />
      </Container>
    </div >
  )
};