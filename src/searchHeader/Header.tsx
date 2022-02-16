import React, { useCallback } from "react";
import { Button, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import cs from "./Header.module.css";

/**
 * 搜索 Header
 * @returns JSX
 */
function SearchHeader() {
  return (
    <div className={cs.header}>
      <div className={cs.logo}>logo</div>
      <SearchInput />
    </div>
  );
}

/**
 * 搜索框组件
 */
export function SearchInput() {
  const handleKeyUp = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(e.currentTarget.value)
    }
  }, [])
  return (
    <div className={cs.searchInputWrapper}>
      <OutlinedInput onKeyUp={handleKeyUp} placeholder="请输入" size="small" className={cs.input} />
      <Button variant="outlined" color="inherit">
        <SearchIcon color="inherit" />
      </Button>
    </div>
  );
}

export default SearchHeader;
