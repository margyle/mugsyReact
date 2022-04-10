import { BrowserRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './recipeBuilder.module.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const RecipeBuilder: React.FC = () => {
  return (
    <div>
      <div className="recipeBuilderContainer">
        <div className={styles.brewSectionSelector}>
          <Container>
            <Row>
              <Col className="d-grid gap-1">
                <Button className={styles.startButton} variant="success">Start</Button>
              </Col>
              <Col className="d-grid gap-1">
                <Button className={styles.pourButton} variant="warning">Pour</Button>
              </Col>
              <Col className="d-grid gap-1">
                <Button className={styles.endButton} variant="danger">End</Button>
              </Col>
            </Row>
          </Container>
          <hr />
        </div >
      </div >
    </div >
  )
};