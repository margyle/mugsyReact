import { BrowserRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const LanderCard: React.FC = () => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./holder.png" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          </Card.Text>
          <Button variant="primary">Placeholder</Button>
        </Card.Body>
      </Card>
    </div>
  )
};