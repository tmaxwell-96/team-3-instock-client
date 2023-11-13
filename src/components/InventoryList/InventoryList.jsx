import "./InventoryList.scss";
import sort from "../../assets/Icons/sort-24px.svg";

import InventoryCard from "../InventoryCard/InventoryCard";
import search from "../../assets/Icons/search-24px.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const InventoryList = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const getInventory = async () => {
    try {
      const response = await axios.get("http://localhost:8080/inventory");
      setInventoryList(response.data);
    } catch (error) {
      alert(
        `There was an issue communicating with the server, please try again later. Error : ${error}`
      );
    }
  };
  useEffect(() => {
    getInventory();
  }, []);

  useEffect(() => {
    try {
      const searchData = async () => {
        const response = await axios.get(
          `http://localhost:8080/search/inventories?searchTerm=${searchKeyword}`
        );
        setInventoryList(response.data);
      };
      if (searchKeyword.length > 3) {
        searchData();
      } else {
        getInventory();
      }
    } catch (error) {
      alert(
        `There was an issue communicating with the server, please try again later. Error : ${error}`
      );
    }
  }, [searchKeyword]);

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  //Delete Inventory Function
  const deleteInventory = async (event) => {
    try {
      await axios.delete(`http://localhost:8080/inventory/${event}`);
      getInventory();
    } catch (error) {
      alert(
        `There was an issue communicating with the server, please try again later. Error : ${error}`
      );
    }
  };

  return (
    <>
      <div className="component-list">
        <h2 className="component-list__header">Inventory</h2>
        <div>
          <input
            className="component-list__search"
            type="text"
            name="search"
            placeholder="Search..."
            onChange={handleSearch}
          />
          <Link to={`/inventory/add`}>
            <button className="component-list__button">
              + Add New Inventory
            </button>
          </Link>
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
