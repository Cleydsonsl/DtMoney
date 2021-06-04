import React from "react";
import { Dashboard } from "./components/Dashboard/intex";
import { Header } from "./components/Header";
import { GlobalStyle } from "./global";

export function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Dashboard />
        <GlobalStyle />'
      </>
    </div>
  );
}
