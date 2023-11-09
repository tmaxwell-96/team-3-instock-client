import "./InventoryList.scss";
import up from "../../assets/Icons/arrow_back-24px.svg";
import down from "../../assets/Icons/arrow_drop_down-24px.svg";
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
    <>
      <div className="inventory-list">
        <h2 className="inventory-list__header">Inventory</h2>
        <div>
          <input
            className="inventory-list__search"
            type="text"
            placeholder="Search..."
          />
          <button className="inventory-list__button">
            + Add New inventory
          </button>
        </div>
      </div>
      <div className="component__main">
        <ul className="component__box component__box--row">
          <li className="component__subheader component__subheader--row">
            <span className="component__detail">INVENTORY ITEM</span>
          </li>
          <li className="component__subheader component__subheader--row">
            <span className="component__detail"> CATEGORY</span>
          </li>
          <li className="component__subheader component__subheader--row">
            <span className="component__detail"> STATUS</span>
          </li>
          <li className="component__subheader component__subheader--row">
            <span className="component__detail"> QUANTITY</span>
          </li>
          <li className="component__subheader component__subheader--row">
            <span className="component__detail"> WAREHOUSE</span>
          </li>
          <li className="component__subheader component__subheader--row">
            <span className="component__detail"> ACTIONS</span>
          </li>
        </ul>
        <ul classNameName="inventory-list__wrapper">
          {inventoryList.map((item) => {
            return <InventoryCard key={item.id} item={item} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default InventoryList;
