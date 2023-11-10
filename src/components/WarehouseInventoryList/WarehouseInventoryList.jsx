import { useState, useEffect } from "react";
import "./WarehouseInventoryList.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

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
    <div className="warehouse-inventory">
      <ul className="warehouse-inventory__list">
        {inventoryList.map((item) => {
          return (
            <div className="warehouse-inventory__container" key={item.id}>
              <div className="warehouse-inventory__wrapper">
                <div className="warehouse-inventory__mobile-container">
                  <p className="warehouse-inventory__subheading">
                    INVENTORY ITEM
                  </p>
                  <p className="warehouse-inventory__text--name">
                    {item.item_name} <img src={chevron} alt="chevron" />{" "}
                  </p>
                  <p className="warehouse-inventory__subheading">CATEGORY</p>
                  <p className="warehouse-inventory__text">{item.category}</p>
                </div>
                <div className="warehouse-inventory__mobile-container">
                  <p className="warehouse-inventory__subheading">STATUS</p>
                  <p className="warehouse-inventory__text">{item.status}</p>
                  <p className="warehouse-inventory__subheading">QTY</p>
                  <p className="warehouse-inventory__text">{item.quantity}</p>
                </div>
              </div>
              <div className="warehouse-inventory__action-container">
                <img src={deleteIcon} alt="trash icon" />
                <img src={editIcon} alt="writing icon" />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default WarehouseInventoryList;
