import { BrowserRouter } from 'react-router-dom';
import { Buttons } from '../../common/button/Button';
import { LanderCard } from '../../common/cards/landerCard/LanderCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../assets/styles/global.scss';


export const Lander: React.FC = () => {
  return (
    <div className="landerContainer">
      <Container>
        <Row>
          <Col />
          <Col><LanderCard /></Col>
          <Col />
          <Col><LanderCard /></Col>
          <Col />
        </Row>

      </Container>
    </div>
  )
};