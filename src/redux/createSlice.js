import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getTetsList } from "../../apiServices/services";
export const testListSlice = createSlice({
  name: "testList",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTetsList.pending, (state) => {
        state.loading = true;
        return state;
      })
      .addCase(getTetsList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        return state;
      })
      .addCase(getTetsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        return state;
      });
  },
});

export default testListSlice.reducer;

// module.exports = {
//   testListSlice: testListSlice.reducer,
//   tetimonialListSlice: tetimonialListSlice.reducer,
// };
