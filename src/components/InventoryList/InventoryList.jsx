import "./InventoryList.scss";
import sort from "../../assets/Icons/sort-24px.svg";

import InventoryCard from "../InventoryCard/InventoryCard";
import search from "../../assets/Icons/search-24px.svg";
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
      <div className="component-list">
        <h2 className="component-list__header">Inventory</h2>
        <div>
          <input
            className="component-list__search"
            type="text"
            placeholder="Search..."
          />

          <button className="component-list__button">
            + Add New inventory
          </button>
        </div>
      </div>
      <div className="component__main">
        <ul className="component__box component__box--row">
          <li className="component__subheader component__subheader--row">
            <span className="component__detail">INVENTORY ITEM</span>
            <img src={sort} alt="sort-icon" />
          </li>
          <li className="component__subheader component__subheader--row">
            <span className="component__detail"> CATEGORY</span>
            <img src={sort} alt="sort-icon" />
          </li>
          <li className="component__subheader component__subheader--row">
            <span className="component__detail"> STATUS</span>
            <img src={sort} alt="sort-icon" />
          </li>
          <li className="component__subheader component__subheader--row">
            <span className="component__detail"> QUANTITY</span>
            <img src={sort} alt="sort-icon" />
          </li>
          <li className="component__subheader component__subheader--row">
            <span className="component__detail"> WAREHOUSE</span>
            <img src={sort} alt="sort-icon" />
          </li>
          <li className="component__subheader component__subheader--row">
            <span className="component__detail"> ACTIONS</span>
            <img src={sort} alt="sort-icon" />
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
