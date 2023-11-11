import "./WarehouseList.scss";
import WarehouseCard from "../WarehouseListCard/WarehouseCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const WarehouseList = () => {
  const [warehouseList, setWarehouseList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const getWarehouses = async () => {
    const response = await axios.get("http://localhost:8080/warehouses");
    setWarehouseList(response.data);
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  useEffect(() => {
    const searchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/search/warehouses?searchTerm=${searchKeyword}`
      );
      setWarehouseList(response.data);
    };

    searchData();
  }, [searchKeyword]);

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <>
      <div className="warehouse-list">
        <h2 className="warehouse-list__header">Warehouses</h2>
        <input
          className="warehouse-list__search"
          type="text"
          name="search"
          placeholder="Search"
          onChange={handleSearch}
        />
        {/* <button className="warehouse-list__button">+ Add New Warehouse</button> */}
        <Link to="/add">
          <button className="warehouse-list__button">
            + Add New Warehouse
          </button>
        </Link>
        <ul className="warehouse-list__wrapper">
          <WarehouseCard />
          {warehouseList.map((warehouse) => {
            return <WarehouseCard key={warehouse.id} warehouse={warehouse} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default WarehouseList;
