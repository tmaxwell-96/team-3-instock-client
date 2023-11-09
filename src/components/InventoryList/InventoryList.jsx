import "./InventoryList.scss";
import InventoryCard from "../InventoryCard/InventoryCard";
import { useState, useEffect } from "react";
import axios from "axios";

const InventoryList = () => {
  const [inventoryList, setInventoryList] = useState([]);

  const getInventory = async () => {
    const response = await axios.get("http://localhost:8080/inventory");
    setInventoryList(response.data);
  };
  useEffect(() => {
    getInventory();
  }, []);

  return (
    <div className="inventory-list">
      <h2 className="inventory-list__header">inventory</h2>
      <input
        className="inventory-list__search"
        type="text"
        placeholder="Search"
      />
      <button className="inventory-list__button">+ Add New inventory</button>
      <ul className="inventory-list__wrapper">
        {inventoryList.map((item) => {
          return <InventoryCard key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default InventoryList;
