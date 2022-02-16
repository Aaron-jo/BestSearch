import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export interface ISearchState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ISearchState = {
  value: 0,
  status: 'idle',
};

export const fetchSearchAsync = createAsyncThunk(
  'search/fetchSearch',
  async (result: number) => {
    // const response = await fetchCount(amount);
    // 这里返回的值会将action payload状态变为fulfilled
    // return response.data;
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {}
})

export const {} = searchSlice.actions; // 返回被slice处理好的action
export default searchSlice.reducer