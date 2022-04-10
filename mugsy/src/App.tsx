import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultContainer } from './features/common/container/DefaultContainer';
import { recipesList } from './features/views/recipeList/recipeListSlice';
import { recipeSteps } from './features/views/recipeBuilder/recipeBuilderSlice';
import { Lander } from './features/views/lander/Lander';
// import { MugsyRouter } from '../src/features/common/config/Router'



export const App: React.FC = () => {
  return (
    <div className="mainContainer">
      <DefaultContainer />
    </div >
  )
};