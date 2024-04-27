import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface color {
  color: string;
  id: number;
}

interface palitraState {
  colors: color[];
}

const initialState: palitraState = {
  colors: [],
};

export const palitraSlice = createSlice({
  name: 'palitra',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<color>) => {
      state.colors = [...state.colors, action.payload];
    },
    editItem: (state, action: PayloadAction<color>) => {
      state.colors = state.colors.map((item) => {
        if (item.id === action.payload.id) {
          return { color: action.payload.color, id: item.id };
        }
        return item;
      });
    },

    deleteItem: (state, action: PayloadAction<number>) => {
      state.colors = state.colors.filter((item) => {
        if (item.id !== action.payload) return true;
      });
    },
  },
});

export const { addItem, editItem, deleteItem } = palitraSlice.actions;
export default palitraSlice.reducer;
