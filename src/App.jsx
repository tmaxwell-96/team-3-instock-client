import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import WarehousePage from "./Pages/WarehousePage/WarehousePage";
import InventoryPage from "./Pages/InventoryPage/InventoryPage";
import InventoryItemDetail from "./components/InventoryItemDetail/InventoryItemDetail";
import MainNav from "./components/MainNav/MainNav";
import AddInventory from "./components/AddInventory/AddInventory";
import WarehouseDetail from "./components/WarehouseDetail/WarehouseDetail";
import Footer from "./components/Footer/Footer";
import EditInventory from "./components/EditInventory/EditInventory";
import AddEditWarehouse from "./components/AddEditWarehouse/AddEditWarehouse";
function App() {
  return (
    <div className="app">
      <div className="app__box">
        <div className="app__navbox">
          <section className="app__container">
            <BrowserRouter>
              <MainNav />

              <Routes>
                <Route path="/" element={<WarehousePage />} />

                <Route path="/:id" element={<WarehouseDetail />} />
                <Route path="/edit/:id?" element={<AddEditWarehouse />} />
                <Route path="/add" element={<AddEditWarehouse />} />
                <Route path="/inventory" element={<InventoryPage />} />
                <Route
                  path="/inventory/:id"
                  element={<InventoryItemDetail />}
                />
                <Route path="/inventory/add" element={<AddInventory />} />
                <Route path="/inventory/edit/:id" element={<EditInventory />} />
              </Routes>
            </BrowserRouter>

            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
