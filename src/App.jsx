import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../team-3-instock-client/src/pages/HomePage/HomePage";
import WareHouse from "../../team-3-instock-client/src/pages/WareHouse/WareHouse";
import Inventory from "../../team-3-instock-client/src/pages/Inventry/Inventory";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseList from "./components/WarehouseList/WarehouseList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p>test</p>
      </div>

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
