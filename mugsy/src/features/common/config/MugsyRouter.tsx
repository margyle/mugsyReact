import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import React from 'react';
import { Lander } from '../../views/lander/Lander';
import { RecipeList } from '../../views/recipeList/RecipeList'
import { RecipeBuilder } from '../../views/recipeBuilder/RecipeBuilder'


export const MugsyRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/lander" element={<Lander />} />
      <Route path="/recipe-list" element={<RecipeList />} />
      <Route path="/recipe-builder" element={<RecipeBuilder />} />
    </Routes>
  )
};