import Home from "./pages/Home";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-screen bg-black relative">
      <Home />
    </div>
  );
}

export default App;
