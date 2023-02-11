import React from "react";

import HomePage from "../pages/home";
import { Route, Routes } from "react-router-dom";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Rotas;
