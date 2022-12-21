import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DataPage from "./pages/DataPage/DataPage";
import HomePage from "./pages/HomePage/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}>
          <Route index element={<HomePage />} />
          <Route path={'employees'} element={<DataPage />} />

        </Route>
        <Route path={'*'} element={<Navigate to={'/'} replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
