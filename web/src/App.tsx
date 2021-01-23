import { defaultTheme, Provider } from "@adobe/react-spectrum";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";

export default function App() {
  return (
    <Provider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
