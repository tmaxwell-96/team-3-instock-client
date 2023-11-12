import { useState, useEffect } from "react";
import sort from "../../assets/Icons/sort-24px.svg";

import "./WarehouseInventoryList.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import InventoryCard from "../InventoryCard/InventoryCard";
import WarehouseInventoryListCard from "../WarehouseInventoryListCard/WarehouseInventoryListCard";

function WarehouseInventoryList() {
  const [inventoryList, setInventoryList] = useState([]);
  const params = useParams();

  const getInventoryList = async () => {
    const response = await axios.get(
      `http://localhost:8080/inventory/warehouses/${params.id}/inventories`
    );
    setInventoryList(response.data);
  };

  useEffect(() => {
    getInventoryList();
  }, [params.id]);
  return (
    <>
      <div className="warehouse-inventory">
        <div className="warehouse-inventory__main">
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
              <span className="component__detail"> ACTIONS</span>
              <img src={sort} alt="sort-icon" />
            </li>
          </ul>
          <ul className="warehouse-inventory__wrapper">
            {inventoryList.map((item, index) => {
              return <WarehouseInventoryListCard key={index} item={item} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default WarehouseInventoryList;
