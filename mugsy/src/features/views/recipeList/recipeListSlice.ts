import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { IRecipesListState, IRecipeListItem } from './recipeListTypes';

// initialState should be undefined in prod, currently populated to simplify layout dev
const initialState: IRecipesListState = {
  value:
    [
      {
        recipeId: 1,
        recipeSource: 'margyle1',
        weight: '32g',
        waterAmount: '250ml',
        waterTemp: '200',
        brewTime: '3:30',
      },
      {
        recipeId: 2,
        recipeSource: 'margyle2',
        weight: '33g',
        waterAmount: '240ml',
        waterTemp: '198',
        brewTime: '3:15',
      }
    ]
};

// export const getLocationContactsAsync = createAsyncThunk(
//   'recipes/get',
//   async (locationId: string) => {
//     const response = await getRecipeList(userId);
//     return response.data;
//   },
// );

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
