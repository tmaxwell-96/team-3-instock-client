import { useState, useEffect } from "react";
import "./WarehouseDetail.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import editWhite from "../../assets/Icons/edit-24px-white.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import WarehouseInventoryList from "../WarehouseInventoryList/WarehouseInventoryList";
import { Link } from "react-router-dom";

const WarehouseDetail = () => {
  const [warehouseDetail, setWarehouseDetail] = useState([]);
  const params = useParams();

  const getWarehouseDetail = async () => {
    const response = await axios.get(
      `http://localhost:8080/warehouses/${params.id}`
    );
    setWarehouseDetail(response.data);
  };
  useEffect(() => {
    getWarehouseDetail();
  }, [params.id]);

  return (
    <div className="warehouse-detail">
      <div className="waerhouse-detail__heading-container">
        <h3 className="warehouse-detail__title">
          <Link to={"/"}>
            <img
              className="warehouse-detail__img"
              src={backArrow}
              alt="back arrow"
            />
          </Link>
          {warehouseDetail.warehouse_name}
        </h3>
        <div className="warehouse-detail__edit-wrapper">
          <img className="warehouse-detail__edit" src={editWhite} alt="edit" />
          <p className="warehouse-detail__edit-text">Edit</p>
        </div>
      </div>
      <div className="warehouse-detail__address-container">
        <p className="warehouse-detail__text">WAREHOUSE ADDRESS:</p>
        <p className="warehouse-detail__text">
          {warehouseDetail.address},{warehouseDetail.city},
          {warehouseDetail.country}
        </p>
      </div>
      <div className="warehouse-detail__container">
        <div className="warehouse-detail__preson-container">
          <p className="warehouse-detail__text">CONTACT NAME:</p>
          <p className="warehouse-detail__text">
            {warehouseDetail.contact_name}{" "}
          </p>
          <p className="warehouse-detail__text">
            {warehouseDetail.contact_position}
          </p>
        </div>
        <div className="warehouse-detail__contact-container">
          <p className="warehouse-detail__text">CONTACT INFORMATION:</p>
          <p className="warehouse-detail__text">
            text:{warehouseDetail.contact_phone}
          </p>
          <p className="warehouse-detail__text">
            {warehouseDetail.contact_email}
          </p>
        </div>
      </div>
      <WarehouseInventoryList />
    </div>
  );
};

export default WarehouseDetail;
