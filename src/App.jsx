import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import WarehousePage from "./Pages/WarehousePage/WarehousePage";
import InventoryPage from "./Pages/InventoryPage/InventoryPage";
import InventoryItemDetail from "./components/InventoryItemDetail/InventoryItemDetail";
import MainNav from "./components/MainNav/MainNav";
import WarehouseDetail from "./components/WarehouseDetail/WarehouseDetail";

function App() {
  return (
    <div>
      <section className="app__container">
        <BrowserRouter>
          <p>MAIN INFO PLACEHOLDER</p>

          <MainNav />

          <Routes>
            <Route path="/" element={<WarehousePage />} />
            <Route path="/:id" element={<WarehouseDetail />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/inventory/:id" element={<InventoryItemDetail />} />
          </Routes>
        </BrowserRouter>
      </section>
      <h2>FOOTER PLACEHOLDER</h2>
    </div>
  );
}

export default App;
