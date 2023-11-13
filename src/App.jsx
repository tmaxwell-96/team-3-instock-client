import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import WarehousePage from "./Pages/WarehousePage/WarehousePage";
import InventoryPage from "./Pages/InventoryPage/InventoryPage";
import InventoryItemDetail from "./components/InventoryItemDetail/InventoryItemDetail";
import MainNav from "./components/MainNav/MainNav";
import AddEditInventory from "./components/AddInventory/AddEditInventory";
import WarehouseDetail from "./components/WarehouseDetail/WarehouseDetail";
import Footer from "./components/Footer/Footer";
import AddEditWarehouse from "./components/AddEditWarehouse/AddEditWarehouse";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <MainNav />
        <div className="app__content-wrapper">
          <div className="app__content">
            <Routes>
              <Route path="/" element={<WarehousePage />} />
              <Route path="/:id" element={<WarehouseDetail />} />
              <Route path="/edit/:id?" element={<AddEditWarehouse />} />
              <Route path="/add" element={<AddEditWarehouse />} />
              <Route path="/inventory" element={<InventoryPage />} />
              <Route path="/inventory/:id" element={<InventoryItemDetail />} />
              <Route path="/inventory/add" element={<AddEditInventory />} />
              <Route
                path="/inventory/edit/:id"
                element={<AddEditInventory />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

{
  /* <div className="app__box">
        <div className="app__navbox">
          <section className="app__container">
            <BrowserRouter>
              <MainNav />
              <div className="app__content">
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
                  <Route
                    path="/inventory/edit/:id"
                    element={<AddInventory />}
                  />
                </Routes>
              </div>
            </BrowserRouter>

            <Footer />
          </section>
        </div>
      </div> */
}
