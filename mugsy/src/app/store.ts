import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import landerCardReducer from '../features/common/cards/landerCard/landerCardSlice';
import recipesListReducer from '../features/views/recipeList/recipeListSlice'
import recipeStepsReducer from '../features/views/recipeBuilder/recipeBuilderSlice';

export const store = configureStore({
  reducer: {
    landerCard: landerCardReducer,
    recipesList: recipesListReducer,
    recipeSteps: recipeStepsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
