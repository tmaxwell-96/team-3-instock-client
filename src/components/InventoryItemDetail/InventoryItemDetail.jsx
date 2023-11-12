import "./InventoryItemDetail.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import editWhite from "../../assets/Icons/edit-24px-white.svg";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const InventoryItemDetail = () => {
  const [inventoryDetails, setInventoryDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    const getInventoryItem = async () => {
      const response = await axios.get(
        `http://localhost:8080/inventory/${params.id}`
      );
      setInventoryDetails(response.data[0]);
    };
    getInventoryItem();
  }, [params.id]);

  return (
    <div className="item-detail">
      <div className="item-detail__header">
        <Link to={`/inventory`}>
          {" "}
          <img src={backArrow} alt="back arrow" />
        </Link>

        <h2 className="item-detail__item">{inventoryDetails.item_name}</h2>
        <Link
          className="item-detail__edit-wrapper"
          to={`/inventory/edit/${params.id}`}
        >
          <img className="item-detail__edit" src={editWhite} alt="edit" />
          <p className="item-detail__edit-text">Edit</p>
        </Link>
      </div>
      <div className="item-detail__content">
        <div className="item-detail__content-item">
          {" "}
          <label className="item-detail__label">ITEM DESCRIPTION:</label>
          <p className="item-detail__text">{inventoryDetails.description}</p>
          <div className="item-detail__content-item-bottom">
            <label className="item-detail__label">CATEGORY:</label>
            <p className="item-detail__text">{inventoryDetails.category}</p>
          </div>
        </div>
        <div className="item-detail__content-status">
          <div className="item-detail__content-left">
            <label className="item-detail__label">STATUS:</label>
            <div
              className={`item-detail__stock-wrapper ${
                inventoryDetails.status === "In Stock"
                  ? "item-detail__stock-wrapper--instock"
                  : "item-detail__stock-wrapper--outstock"
              } item-detail__stock-wrapper--instock"`}
            >
              <p
                className={`item-detail__text ${
                  inventoryDetails.status === "In Stock"
                    ? "item-detail__text--instock"
                    : "item-detail__text--outstock"
                }`}
              >
                {inventoryDetails.status}
              </p>
            </div>
            <div className="item-detail__content-status-bottom">
              <label className="item-detail__label">WAREHOUSE:</label>
              <p className="item-detail__text">
                {inventoryDetails.warehouse_name}{" "}
              </p>
            </div>
          </div>
          <div className="item-detail__right">
            <label className="item-detail__label">QUANTITY:</label>
            <p className="item-detail__text">{inventoryDetails.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemDetail;
