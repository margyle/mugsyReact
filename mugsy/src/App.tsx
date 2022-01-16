import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { DefaultContainer } from './features/common/container/DefaultContainer';


export const App: React.FC = () => (
  <div>
    <BrowserRouter>
      <Route path="/" element={DefaultContainer} />
    </BrowserRouter>
  </div>
);

