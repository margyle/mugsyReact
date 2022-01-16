import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../navigation/Navigation';

export const DefaultContainer = (): React.ReactElement => (
  <div>
    <header>
      <Navbar />
    </header>
  </div>
);