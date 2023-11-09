import { useState, useEffect } from "react";
import "./WarehouseInventoryList.scss";
import axios from "axios";
// import { Params } from "react-router-dom";

function WarehouseInventoryList() {
  const [inventoryList, setInventoryList] = useState([]);
  //   const params = useParams();

  const getInventoryList = async () => {
    const response = await axios.get("http://localhost:8080/inventory");
    setInventoryList(response.data);
    console.log(inventoryList);
  };

  useEffect(() => {
    getInventoryList();
  }, []);
  return (
    <div className="warehouse-inventory">
      <ul className="warehouse-inventory__list">
        {inventoryList.map((item) => {
          return (
            <div className="warehouse-inventory__container">
              <p>{item.item_name}</p>
              <p>{item.category}</p>
              <p>{item.status}</p>
              <p>{item.quantity}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default WarehouseInventoryList;
