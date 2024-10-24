import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  selectedCurrencies: [],
  currentSellPrice: 0, // 새로운 상태 필드 추가
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setSelectedCurrencies: (state, action) => {
      state.selectedCurrencies = action.payload;
    },
    addSelectedCurrency: (state, action) => {
      if (!state.selectedCurrencies.includes(action.payload)) {
        state.selectedCurrencies.push(action.payload);
      }
    },
    removeSelectedCurrency: (state, action) => {
      state.selectedCurrencies = state.selectedCurrencies.filter(
        (currency) => currency !== action.payload
      );
    },
    setCurrentSellPrice: (state, action) => { // 새로운 액션 추가
      state.currentSellPrice = action.payload;
    },
  },
});

export const {
  setUser,
  clearUser,
  setSelectedCurrencies,
  addSelectedCurrency,
  removeSelectedCurrency,
  setCurrentSellPrice, // 새 액션 내보내기
} = userSlice.actions;

export default userSlice.reducer;
