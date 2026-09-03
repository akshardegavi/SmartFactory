import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MachineHealth from "./pages/MachineHealth";
import ProductQuality from "./pages/ProductQuality";
import Energy from "./pages/Energy";
import Production from "./pages/Production";
import Inventory from "./pages/Inventory";
import Sustainability from "./pages/Sustainability";
import Assistant from "./pages/Assistant";
import DecisionSupport from "./pages/DecisionSupport";
import Reports from "./pages/Reports";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/machine-health" element={<MachineHealth />} />
      <Route path="/product-quality" element={<ProductQuality />} />
      <Route path="/energy" element={<Energy />} />
      <Route path="/production" element={<Production />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/assistant" element={<Assistant />} />
      <Route path="/sustainability" element={<Sustainability />} />
      <Route path="/decision-support" element={<DecisionSupport />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
}

export default App;