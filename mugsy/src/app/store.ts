import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import landerCardReducer from '../features/common/cards/landerCard/landerCardSlice';

export const store = configureStore({
  reducer: {
    landerCard: landerCardReducer,
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
