import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { DefaultContainer } from './features/common/container/DefaultContainer';
import { recipesList } from './features/views/recipeList/recipeListSlice';



export const App: React.FC = () => {
  return (
    <div className="mainContainer">

      <DefaultContainer />


      {/* <BrowserRouter>
      Hello
      <Route path="/" element={DefaultContainer} />
    </BrowserRouter> */}
    </div>
  )
};

