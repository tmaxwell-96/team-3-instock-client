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
      <h2 className="inventory-list__header">Inventory</h2>
      <input
        className="inventory-list__search"
        type="text"
        placeholder="Search..."
      />
      <button className="inventory-list__button">+ Add New inventory</button>
      <h2 class="component__title">List Component</h2>
      <ul class="component__box component__box--row">
        <li class="component__subheader component__subheader--row">
          <span class="component__detail"> INVENTORY ITEM</span>
        </li>
        <li class="component__subheader component__subheader--row">
          <span class="component__detail"> CATEGORY</span>
        </li>
        <li class="component__subheader component__subheader--row">
          <span class="component__detail"> STATUS</span>
        </li>
        <li class="component__subheader component__subheader--row">
          <span class="component__detail"> QUANTITY</span>
        </li>
        <li class="component__subheader component__subheader--row">
          <span class="component__detail"> WAREHOUSE</span>
        </li>
        <li class="component__subheader component__subheader--row">
          <span class="component__detail"> ACTIONS</span>
        </li>
      </ul>
      <ul className="inventory-list__wrapper">
        {inventoryList.map((item) => {
          return <InventoryCard key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default InventoryList;
