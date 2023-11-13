import { useState, useEffect } from "react";
import sort from "../../assets/Icons/sort-24px.svg";
import filterIcon from "../../assets/Icons/sort-24px.svg";

import "./WarehouseInventoryList.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import InventoryCard from "../InventoryCard/InventoryCard";
import WarehouseInventoryListCard from "../WarehouseInventoryListCard/WarehouseInventoryListCard";

function WarehouseInventoryList() {
  const [inventoryList, setInventoryList] = useState([]);
  const [warehouseList, setWarehouseList] = useState([]);

  const params = useParams();

  const getInventoryList = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/inventory/warehouses/${params.id}/inventories`
      );
      setInventoryList(response.data);
    } catch (error) {
      alert(`This warehouse doesn't have inventory.`);
    }
  };

  const sortByName = () => {
    const nameSort = [...inventoryList].sort((a, b) => {
      if (a.item_name < b.item_name) {
        return -1;
      }
      if (a.item_name > b.item_name) {
        return 1;
      }
      return 0;
    });
    setInventoryList(nameSort);
  };
  const sortByCategory = () => {
    const categorySort = [...inventoryList].sort((a, b) => {
      if (a.status < b.status) {
        return -1;
      }
      if (a.status > b.status) {
        return 1;
      }
      return 0;
    });
    setInventoryList(categorySort);
  };

  const sortByStatus = () => {
    const statusSort = [...inventoryList].sort((a, b) => {
      if (a.quantity < b.quantity) {
        return -1;
      }
      if (a.quantity > b.quantity) {
        return 1;
      }
      return 0;
    });
    setInventoryList(statusSort);
  };

  const sortByquantity = () => {
    const quantitySort = [...inventoryList].sort((a, b) => {
      if (a.contact_email < b.contact_email) {
        return -1;
      }
      if (a.contact_email > b.contact_email) {
        return 1;
      }
      return 0;
    });
    setInventoryList(quantitySort);
  };

  useEffect(() => {
    getInventoryList();
  }, [params.id]);
  return (
    <>
      <div className="warehouse-inventory">
        <div className="warehouse-inventory__main">
          <div className="warehouse-list__columns">
            <div className="warehouse-list__column warehouse-list__column--warehouse">
              <p className="warehouse-list__text">INVENTORY ITEM</p>
              <img
                className="warehouse-list__sort"
                src={filterIcon}
                alt="sort icon"
                onClick={sortByName}
              />
            </div>

            <div className="warehouse-list__column warehouse-list__column--address">
              <p className="warehouse-list__text">CATEGORY</p>
              <img
                className="warehouse-list__sort"
                src={filterIcon}
                alt="sort icon"
                onClick={sortByCategory}
              />
            </div>

            <div className="warehouse-list__column warehouse-list__column--name">
              <p className="warehouse-list__text">STATUS</p>
              <img
                className="warehouse-list__sort"
                src={filterIcon}
                alt="sort icon"
                onClick={sortByStatus}
              />
            </div>

            <div className="warehouse-list__column warehouse-list__column--info">
              <p className="warehouse-list__text">QTY</p>
              <img
                className="warehouse-list__sort"
                src={filterIcon}
                alt="sort icon"
                onClick={sortByquantity}
              />
            </div>

            <div className="warehouse-list__column warehouse-list__column--actions">
              <p className="warehouse-list__actions">ACTIONS</p>
            </div>
          </div>
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
