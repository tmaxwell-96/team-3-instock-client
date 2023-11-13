import "./InventoryList.scss";
import sort from "../../assets/Icons/sort-24px.svg";

import InventoryCard from "../InventoryCard/InventoryCard";
import search from "../../assets/Icons/search-24px.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const InventoryList = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isAscending, setIsAscending] = useState(true);

  const getInventory = async () => {
    const response = await axios.get("http://localhost:8080/inventory");
    setInventoryList(response.data);
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
    } else {
      getInventory();
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

  const handleClick = async (columnName, sortOrder) =>{
    setIsAscending(!isAscending);
    console.log('Sort Order:', isAscending ? 'asc' : 'desc');
    const sortData = await axios.get(`http://localhost:8080/inventory/sortInventory/sort?sort_by=${columnName}&order_by=${sortOrder}`);
    setInventoryList(sortData.data);
  }

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
              + Add New Warehouse
            </button>
          </Link>
        </div>
      </div>
      <div className="component__main">
        <ul className="component__box component__box--row">
          <li className="component__subheader component__subheader--row">
            <span className="component__detail">INVENTORY ITEM</span>
            <img  className="component-list__sort" 
                  onClick={() => handleClick('item_name', isAscending ? 'asc' : 'desc')}
                  src={sort} alt="sort-icon" 
            />
          </li>
          <li className="component__subheader component__subheader--row">
            <span className="component__detail"> CATEGORY</span>
            <img  className="component-list__sort" 
                  onClick={() => handleClick('category', isAscending ? 'asc' : 'desc')}
                  src={sort} alt="sort-icon" 
            />
          </li>
          <li className="component__subheader component__subheader--row">
            <span className="component__detail"> STATUS</span>
            <img  className="component-list__sort" 
                  onClick={() => handleClick('status', isAscending ? 'asc' : 'desc')}
                  src={sort} alt="sort-icon" 
            />
          </li>
          <li className="component__subheader component__subheader--row">
            <span className="component__detail"> QUANTITY</span>
            <img  className="component-list__sort" 
                  onClick={() => handleClick('quantity', isAscending ? 'asc' : 'desc')}
                  src={sort} alt="sort-icon" 
            />
          </li>
          <li className="component__subheader component__subheader--row">
            <span className="component__detail"> WAREHOUSE</span>
            <img  className="component-list__sort" 
                  onClick={() => handleClick('warehouse_name', isAscending ? 'asc' : 'desc')}
                  src={sort} alt="sort-icon" 
            />
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
