import './App.css';
import React from "react";
import { AppProvider } from './context/AppContext';
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
    <AppProvider>
      <Navbar />
    </AppProvider>
    </>
  );
}

export default App;
