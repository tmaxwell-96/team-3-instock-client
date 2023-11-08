import { BrowserRouter, Routes, Route } from "react-router-dom";
import WareHouse from "./pages/WareHouse/WareHouse";
import Inventory from "./pages/Inventory/Inventory";
import "./App.scss";
import WarehouseDetail from "./component/WarehouseDetail/WarehouseDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p>test</p>
      </div>
      <WarehouseDetail />
      <Routes>
        <Route path="/" element={<WareHouse />} />
        <Route path="/:id" element={<WareHouse />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:id" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
