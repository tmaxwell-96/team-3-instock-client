import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import WarehousePage from "./Pages/WarehousePage/WarehousePage";
import InventoryPage from "./Pages/InventoryPage/InventoryPage";
import WarehouseDetail from "./component/WarehouseDetail/WarehouseDetail";

function App() {
  return (
    <div>
      <h1>HEADER PLACEHOLDER</h1>
      <section className="app__container">
        <BrowserRouter>
          <p>MAIN INFO PLACEHOLDER</p>

          <Routes>
            <Route path="/" element={<WarehousePage />} />
            <Route path="/:id" element={<WarehousePage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/inventory/:id" element={<InventoryPage />} />
          </Routes>
        </BrowserRouter>
      </section>
      <h2>FOOTER PLACEHOLDER</h2>
    </div>
  );
}

export default App;
