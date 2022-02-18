import React, { useCallback, useEffect } from "react";
import { Button, OutlinedInput, Typography, Box, SxProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useParams, useNavigate, Route, Routes } from "react-router-dom";
import {fetchSearchAsync, setSearchValue} from '../search/searchSlice';
import {useAppDispatch, useAppSelector} from '../app/hooks'

/**
 * 搜索 Header
 * @returns JSX
 */
function SearchHeader() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <Box
      sx={{
        height: 72,
        borderBottom: "solid 1px gainsboro",
        display: "flex",
        alignItems: "center",
        p: "0 16px",
      }}
    >
      <Typography
        component="div"
        variant="h6"
        sx={{
          mr: 1,
          display: { xs: "none", md: "block" },
          cursor: 'pointer'
        }}
        onClick={() => {
          dispatch(setSearchValue(''));
          navigate('/');
        }}
      >
        <span style={{ fontWeight: "bold" }}>Best</span>Search
      </Typography>
      <Typography variant="h6" sx={{ display: { xs: "flex", md: "none", alignItems: "center" } }}>
        <AcUnitIcon />
      </Typography>
      <Routes>
        <Route path="/search/:keywords" element={<SearchInput />} />
      </Routes>
    </Box>
  );
}

/**
 * 搜索框组件
 */
interface ISearchInputProps {
  sx?: SxProps;
  [key: string]: unknown;
}
export function SearchInput({ sx, ...restProps }: ISearchInputProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selectorValue = useAppSelector((state) => state.search.value);
  const {keywords} = useParams();

  useEffect(() => {
    if (keywords) {
      const value = keywords.replaceAll('+', ' ');
      dispatch(setSearchValue(value));
      dispatch(fetchSearchAsync(value));
    }
  }, [])

  const handleSearch = useCallback((value?: string) => {
    if (!value) return
    let searchValue = value.replace(/\s+/g, "+");
    if (searchValue) {
      dispatch(setSearchValue(value));
      dispatch(fetchSearchAsync(value));
      navigate(`/search/${searchValue}`);
    }
  }, []);

  return (
    <Box
      sx={{
        ...sx,
        marginLeft: 1,
        width: "80%",
        display: "flex",
        alignItems: "center",
        color: "rgb(133, 133, 133)",
      }}
    >
      <OutlinedInput
        onKeyUp={(e) => {
          const value = e.currentTarget.value;
          if (e.key.toLocaleLowerCase() == 'enter') {
            handleSearch(value);
          }
        }}
        value={selectorValue}
        onChange={(e) => {
          dispatch(setSearchValue(e.target.value))
        }}
        placeholder="Search for new products in 961K stores"
        size="small"
        sx={{
          width: "100%",
        }}
      />
      <Button
        sx={{
          ml: 1,
        }}
        variant="outlined"
        color="inherit"
        onClick={() => {
          handleSearch(selectorValue);
        }}
      >
        <SearchIcon color="inherit" />
      </Button>
    </Box>
  );
}

export default SearchHeader;
