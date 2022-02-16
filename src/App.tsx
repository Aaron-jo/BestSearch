import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Search from "./search/Search";
import Header from "./searchHeader/Header";
import {Container} from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header />

      <Container>
        <Routes>
          <Route path="/" />
          <Route path="/search/:keywords" element={<Search />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
