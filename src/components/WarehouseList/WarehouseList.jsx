import "./WarehouseList.scss";
import searchIcon from "../../assets/Icons/search-24px.svg";
import filterIcon from "../../assets/Icons/sort-24px.svg";
import WarehouseCard from "../WarehouseListCard/WarehouseCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalComopnent from "./../../components/ModalComopnent/ModalComopnent";

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

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState({
    id: null,
    name: "",
  });

  const openModal = (id, warehouseName) => {
    setModalOpen(true);
    setSelectedWarehouse({ id, warehouseName });
  };

  const closeModal = () => {
    setModalOpen(false);
    getWarehouses();
  };

  return (
    <>
      <div className="warehouse-list">
        <div className="warehouse-list__top">
          <h2 className="warehouse-list__header">Warehouses</h2>
          <div className="warehouse-list__top-container">
            <div className="warehouse-list__search-wrapper">
              <div className="warehouse-list__overlay">
                <img
                  className="warehouse-list__search-icon"
                  src={searchIcon}
                  alt="search icon"
                />
              </div>

              <input
                className="warehouse-list__search"
                type="text"
                name="search"
                placeholder="Search"
                onChange={handleSearch}
              />
            </div>

            <Link className="warehouse-list__button-wrapper" to="/add">
              <button className="warehouse-list__button">
                + Add New Warehouse
              </button>
            </Link>
          </div>
        </div>

        <div className="warehouse-list__columns">
          <div className="warehouse-list__column warehouse-list__column--warehouse">
            <p className="warehouse-list__text">WAREHOUSE</p>
            <img
              className="warehouse-list__sort"
              src={filterIcon}
              alt="sort icon"
            />
          </div>

          <div className="warehouse-list__column warehouse-list__column--address">
            <p className="warehouse-list__text">ADDRESS</p>
            <img
              className="warehouse-list__sort"
              src={filterIcon}
              alt="sort icon"
            />
          </div>

          <div className="warehouse-list__column warehouse-list__column--name">
            <p className="warehouse-list__text">CONTACT NAME</p>
            <img
              className="warehouse-list__sort"
              src={filterIcon}
              alt="sort icon"
            />
          </div>

          <div className="warehouse-list__column warehouse-list__column--info">
            <p className="warehouse-list__text">CONTACT INFORMATION</p>
            <img
              className="warehouse-list__sort"
              src={filterIcon}
              alt="sort icon"
            />
          </div>

          <div className="warehouse-list__column warehouse-list__column--actions">
            <p className="warehouse-list__actions">ACTIONS</p>
          </div>
        </div>

        <ul className="warehouse-list__wrapper">
          <WarehouseCard />
          {warehouseList.map((warehouse) => {
            return (
              <WarehouseCard
                key={warehouse.id}
                warehouse={warehouse}
                openModal={openModal}
              />
            );
          })}
        </ul>
      </div>

      <ModalComopnent
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        selectedWarehouse={selectedWarehouse}
      />
    </>
  );
};

export default WarehouseList;
