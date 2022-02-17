import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AsyncThunk,
  AnyAction,
} from "@reduxjs/toolkit";
import { searchResultMockAPI } from "./searchAPI";
import { ISearcResultDataType } from "./mockData";

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;
export interface ISearchState {
  value?: string;
  status: "loading" | "failed" | "success";
  searchResult?: ISearcResultDataType["data"];
}

const initialState: ISearchState = {
  value: "",
  status: "loading",
  searchResult: undefined,
};

interface ISearchParams {
  login_token: "INTERVIEW_SIMPLY2021";
  search_phrase: string;
}

/**
 * @description 使用`createAsyncThunk`创建一个执行异步逻辑的thunk函数.
 * 它能像其它常规action函数一样被dispatch触发: `dispatch(fetchSearchAsync('hat'))`
 */
export const fetchSearchAsync = createAsyncThunk(
  "search/fetchSearch",
  async (search_phrase: string) => {
    const params: ISearchParams = {
      login_token: "INTERVIEW_SIMPLY2021",
      search_phrase,
    };
    const response = await fetch(
      "http://3.141.23.218:5000/interview/keyword_search",
      {
        method: 'POST',
        body: JSON.stringify(params),
      }
    );
    const json = await response.json();
    // const json = await searchResultMockAPI();
    if (json.status == 'OK') {
      // 这里返回的值将会给到action payload, 并且状态变为fulfilled
      return json;
    }
    // 如果请求有误, reject
    return Promise.reject();
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  // `reducers` 属性允许定义修改reducers, 并自动生成相关的actions
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
  // `extraReducers` 可以处理被`createAsyncThunk` 或者其他 `slices` 生成的 `actions`
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.searchResult = action.payload.data;
      })
      .addMatcher(
        (action: AnyAction): action is RejectedAction =>
          action.type.endsWith("/rejected"),
        (state) => {
          state.status = "failed";
          state.searchResult = undefined
        }
      )
      .addDefaultCase((state) => {
        state.status = "loading";
      });
  },
});

export const { setSearchValue } = searchSlice.actions; // 返回被 Slice 处理好的 action
export default searchSlice.reducer;
