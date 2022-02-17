import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SearchResult from "./search/SearchResult";
import Header, { SearchInput } from "./searchHeader/Header";
import { Container, Box, Typography } from "@mui/material";

function App() {
  return (
    <Box className="App" sx={{ display: "flex", flexDirection: "column" }}>
      <Header />

      <Container sx={{ flex: 1, width: "100%", overflow: 'auto', height: 0, mb: 2 }}>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/search/:keywords" element={<SearchResult />} />
        </Routes>
      </Container>
    </Box>
  );
}

function HomeContainer() {
  return (
    <Container
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography align="center" noWrap variant="h2">
        Search Trends
      </Typography>
      <SearchInput sx={{ mt: 1 }} />
    </Container>
  );
}

export default App;
