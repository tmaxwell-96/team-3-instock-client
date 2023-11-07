import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseList from "./components/WarehouseList/WarehouseList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/warehouses" element={<WarehouseList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
