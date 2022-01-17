import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { IRecipesListState, IRecipeListItem } from './recipeListTypes';

const initialState: IRecipesListState = {
  value: undefined,
};

export const recipesListSlice = createSlice({
  name: 'recipesList',
  initialState,
  reducers: {
    recipesList: (state) => state,
    setRecipesList: (state, action) => {
      const { recipesListDetails } = action.payload;
      const newState = state;
      newState.value = recipesListDetails;
      return newState;
    },
    resetRecipesList() {
      return initialState;
    },
  },

});

export const {
  recipesList, setRecipesList, resetRecipesList,
} = recipesListSlice.actions;
export const getRecipeList = (state: RootState): IRecipeListItem[] | undefined => state.recipesList.value;

export default recipesListSlice.reducer;
