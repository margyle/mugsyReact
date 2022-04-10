import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { IRecipeStepsState, IRecipeStep, } from './recipeBuilderTypes';

// initialState should be undefined in prod, currently populated to simplify layout dev
const initialState: IRecipeStepsState = {
  value:
    [
      {
        stepSection: 'start',
        stepDetail: [{
          stepAttribute: {
            stepAttributeType: 'heat',
            stepAttributeValue: 198,
            stepAttributeUnit: 'temp_f',
          },
        }, {
          stepAttribute: {
            stepAttributeType: 'grind',
            stepAttributeValue: 42,
            stepAttributeUnit: 'grams',
          }
        }
        ]
      },

    ]
}

export const recipeStepsSlice = createSlice({
  name: 'recipeSteps',
  initialState,
  reducers: {
    recipeSteps: (state) => state,
    setrecipeSteps: (state, action) => {
      const { recipesStepDetails } = action.payload;
      const newState = state;
      newState.value = recipesStepDetails;
      return newState;
    },
    resetRecipeSteps() {
      return initialState;
    },
  },

});

export const {
  recipeSteps, setrecipeSteps, resetRecipeSteps,
} = recipeStepsSlice.actions;
export const getRecipeSteps = (state: RootState): IRecipeStep[] | undefined => state.recipeSteps.value;

export default recipeStepsSlice.reducer;
