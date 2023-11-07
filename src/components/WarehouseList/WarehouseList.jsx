import "./WarehouseList.scss";
import WarehouseCard from "../WarehouseListCard/WarehouseCard";
import { useState, useEffect } from "react";
import axios from "axios";

const WarehouseList = () => {
  const [warehouseList, setWarehouseList] = useState([]);
  const getWarehouses = async () => {
    const response = await axios.get("http://localhost:8080/warehouses");
    setWarehouseList(response.data);
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  return (
    <div className="warehouse-list">
      <h2 className="warehouse-list__header">Warehouses</h2>
      <input
        className="warehouse-list__search"
        type="text"
        placeholder="Search"
      />
      <button className="warehouse-list__button">+ Add New Warehouse</button>
      <ul className="warehouse-list__wrapper">
        <WarehouseCard />
        {warehouseList.map((warehouse) => {
          return <WarehouseCard key={warehouse.id} warehouse={warehouse} />;
        })}
      </ul>
    </div>
  );
};

export default WarehouseList;
