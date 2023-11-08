import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from "./Pages/Warehouse/Warehouse";
import Inventory from "./Pages/Inventry/Inventry";
import "./App.scss";
import WarehouseDetail from "./Components/WarehouseDetail/WarehouseDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p>test</p>
      </div>

      <WarehouseDetail />
      <Routes>
        <Route path="/" element={<Warehouse />} />
        <Route path="/:id" element={<Warehouse />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:id" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
