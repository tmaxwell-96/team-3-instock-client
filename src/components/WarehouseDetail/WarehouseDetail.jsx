import { useState, useEffect } from "react";
import "./WarehouseDetail.scss";
import axios from "axios";

const WarehouseDetail = () => {
  const [warehouseDetail, setWarehouseDetail] = useState([]);
  const getWarehouseDetail = async () => {
    const response = await axios.get("http://localhost:8080/warehouses/");
    setWarehouseDetail(response.data);
    // console.log(response.data);
  };
  useEffect(() => {
    getWarehouseDetail();
  }, []);
  // console.log(warehouseDetail);

  return (
    <div className="warehouse-detail">
      {/* <p>warehouse detail test</p> */}
      <div className="warehouse-detail__address-container">
        <p className="warehouse-detail__text">WAREHOUSE ADDRESS:</p>
        {/* <p className="warehouse-detail__text">text:{warehouseDetail[1].id}</p> */}
      </div>
      <div className="warehouse-detail__contact-container">
        <p className="warehouse-detail__text">CONTACT NAME:</p>
        {/* <p className="warehouse-detail__text">text:{warehouseDetail[1].id}</p> */}
        <p className="warehouse-detail__text">CONTACT INFORMATION:</p>
        {/* <p className="warehouse-detail__text">text:{warehouseDetail[1].id}</p> */}
      </div>
    </div>
  );
};

export default WarehouseDetail;
