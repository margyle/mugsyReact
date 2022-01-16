import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../navigation/Navigation';
import Button from 'react-bootstrap/Button';

export const Buttons: React.FC = () => {
  return (
    <div>
      Buttons:
      <Button variant="info">Info</Button>{' '}
    </div>
  )
};