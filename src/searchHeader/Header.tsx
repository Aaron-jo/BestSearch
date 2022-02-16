import React from "react";
import { Button, Container, Input } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import cs from "./Header.module.css";

/**
 * 搜索 Header
 * @returns JSX
 */
function SearchHeader() {
  return (
    <Container maxWidth={false} className={cs.header}>
      <div className={cs.logo}>logo</div>
      <SearchHeader />
    </Container>
  );
}

/**
 * 搜索框组件
 */
export function SearchInput() {
  return (
    <Container className={cs.searchInputWrapper}>
      <Input />
      <Button variant="outlined" />
    </Container>
  );
}

export default SearchHeader;
