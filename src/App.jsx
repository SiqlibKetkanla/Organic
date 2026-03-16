import React from "react";
import { Outlet } from "react-router-dom";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
