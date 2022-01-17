import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../../app/store';
import { ILanderCardState, ILanderCardData } from './landerCardTypes';

const initialState: ILanderCardState = {
  value: undefined,
};

export const landerCardSlice = createSlice({
  name: 'landerCard',
  initialState,
  reducers: {
    landerCard: (state) => state,
    setLanderCard: (state, action) => {
      const { landerCardDetails } = action.payload;
      const newState = state;
      newState.value = landerCardDetails;
      return newState;
    },
    resetLanderCard() {
      return initialState;
    },
  },

});

export const {
  landerCard, setLanderCard, resetLanderCard,
} = landerCardSlice.actions;
export const getLanderCard = (state: RootState): ILanderCardData | undefined => state.landerCard.value;

export default landerCardSlice.reducer;
