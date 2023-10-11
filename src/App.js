import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trade from "./components/Trade";
import Cart from "./components/Cart";

export const AppContext = React.createContext();

function App() {
  const [stateA, setStateA] = React.useState(0);

  return (
    <div>
      <BrowserRouter>
        <AppContext.Provider value={{ stateA, setStateA }}>
          <Routes>
            <Route path="/" element={<Trade />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
