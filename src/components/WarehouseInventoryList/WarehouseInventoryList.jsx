import { useState, useEffect } from "react";
import "./WarehouseInventoryList.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
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
          <ul className="warehouse-inventory__box warehouse-inventory__box--row">
            <li className="warehouse-inventory__subheader warehouse-inventory__subheader--row">
              <span className="warehouse-inventory__detail">
                INVENTORY ITEM
              </span>
            </li>
            <li className="warehouse-inventory__subheader warehouse-inventory__subheader--row">
              <span className="warehouse-inventory__detail"> CATEGORY</span>
            </li>
            <li className="warehouse-inventory__subheader warehouse-inventory__subheader--row">
              <span className="warehouse-inventory__detail"> STATUS</span>
            </li>
            <li className="warehouse-inventory__subheader warehouse-inventory__subheader--row">
              <span className="warehouse-inventory__detail"> QUANTITY</span>
            </li>
            <li className="warehouse-inventory__subheader warehouse-inventory__subheader--row">
              <span className="warehouse-inventory__detail"> ACTIONS</span>
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
