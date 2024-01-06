import React from "react";
import { BrowserRouter, Route, Navigate, Routes, Switch } from "react-router-dom";
import Cover from "../layouts/landing-page/Cover";
import MainLayout from "../layouts/MainLayouts";


const Routers = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/undangan"
          element={
            // <Cover />
            <MainLayout />
          }
        />
        <Route
          path="/"
          element={
            // <MainLayout />
            <Cover />
          }
        />
         <Route
          path="/:nama"
          element={
            // <MainLayout />
            <Cover />
          }
        />
        


        {/* <Route path="*" element={<Error404Page />}/> */}
      </Routes>
    </BrowserRouter>
  </>
  );
};

export default Routers;
