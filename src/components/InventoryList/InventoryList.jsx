import "./InventoryList.scss";
import up from "../../assets/Icons/arrow_back-24px.svg";
import down from "../../assets/Icons/arrow_drop_down-24px.svg";
import InventoryCard from "../InventoryCard/InventoryCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const InventoryList = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const getInventory = async () => {
    const response = await axios.get("http://localhost:8080/inventory");
    setInventoryList(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getInventory();
  }, []);

  useEffect(() => {
    const searchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/search/inventories?searchTerm=${searchKeyword}`
      );
      setInventoryList(response.data);
    };
    if (searchKeyword.length > 3) {
      searchData();
    }
  }, [searchKeyword]);

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  //Delete Inventory Function
  const deleteInventory = async (event) => {
    await axios.delete(`http://localhost:8080/inventory/${event}`);
    getInventory();
  };

  return (
    <>
      <div className="inventory-list">
        <h2 className="inventory-list__header">Inventory</h2>
        <div>
          <input
            className="inventory-list__search"
            type="text"
            name="search"
            placeholder="Search..."
            onChange={handleSearch}
          />
          <Link to={`/inventory/add`}>
            <button className="inventory-list__button">
              + Add New inventory
            </button>
          </Link>
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
        <ul className="inventory-list__wrapper">
          {inventoryList.map((item, index) => {
            return (
              <InventoryCard
                key={index}
                deleteInventory={deleteInventory}
                item={item}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default InventoryList;
