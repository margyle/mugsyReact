import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { DefaultContainer } from './features/common/container/DefaultContainer';
import { recipesList } from './features/views/recipeList/recipeListSlice';
// import { MugsyRouter } from '../src/features/common/config/Router'



export const App: React.FC = () => {
  return (
    <div className="mainContainer">
      <DefaultContainer />
    </div >
  )
};

