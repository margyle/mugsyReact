import { BrowserRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './landerCard.module.scss';

export const LanderCard: React.FC = () => {
  return (
    <div>
      <Card className="shadow sm">
        <Card.Body className={styles.cardContainer}>
          <Card.Title>Hello</Card.Title>
          <Card.Text>
            Hello
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div >
  )
};