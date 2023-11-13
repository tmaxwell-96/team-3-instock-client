import "./InventoryCard.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Modal from "react-modal";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";

import DeleteInventory from "../DeleteInventory/DeleteInventory";

Modal.setAppElement("#root");

const InventoryCard = ({ item, deleteInventory }) => {
  //Modal Component
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="component__container">
        <section className="component">
          {/* !-- This is the part that should be rendered by javascript according to each Item --> */}
          <div className="component__box">
            <div className="component__box--break">
              <div className="component__item">
                <div className="component__subheader component__subheader--column">
                  <span className="component__detail">INVENTORY ITEM</span>
                </div>

                <Link
                  className="warehouse-inventory-card__txt warehouse-inventory-card__txt--link "
                  to={`/inventory/${item.id}`}
                >
                  <div className="warehouse-inventory-card__txt">
                    <span className="warehouse-inventory-card__detail">
                      {item.item_name}
                    </span>
                    <img src={chevronIcon} alt="chevronIcon" />
                  </div>
                </Link>
              </div>

              <div className="component__item">
                <div className="component__subheader component__subheader--column">
                  <span className="component__detail">CATEGORY</span>
                </div>
                <div className="component__txt">
                  <span className="component__detail">{item.category}</span>
                </div>
                <div className="component__txt">
                  <div className=" component__icon--delete1">
                    <DeleteInventory
                      modalIsOpen={modalIsOpen}
                      item={item}
                      deleteInventory={deleteInventory}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="component__box--break component__box--breakright">
              <div className="component__item">
                <div className="component__subheader component__subheader--column">
                  <span className="component__detail"> STATUS </span>
                </div>
                <div
                  className={`warehouse-inventory-card__stock-wrapper ${
                    item.status === "In Stock"
                      ? "warehouse-inventory-card__stock-wrapper--instock"
                      : "warehouse-inventory-card__stock-wrapper--outstock"
                  } warehouse-inventory-card__stock-wrapper--instock"`}
                >
                  <p
                    className={`warehouse-inventory-card__text ${
                      item.status === "In Stock"
                        ? "warehouse-inventory-card__text--instock"
                        : "warehouse-inventory-card__text--outstock"
                    }`}
                  >
                    {item.status}
                  </p>
                </div>
              </div>

              <div className="component__item">
                <div className="component__subheader component__subheader--column">
                  <span className="component__detail"> QTY </span>
                </div>
                <div className="component__txt">
                  <span className="component__detail"> {item.quantity}</span>
                </div>
              </div>

              <div className="component__item">
                <div className="component__subheader component__subheader--column">
                  <span className="component__detail">WAREHOUSE</span>
                </div>
                <div className="component__txt">
                  <span className="component__detail">
                    {item.warehouse_name}
                  </span>
                </div>
              </div>

              <div className="component__item">
                {/* <Link to={`inventory/edit/${item.id}`}></Link> */}
                <div className="component__icon component__icon--delete2">
                  <DeleteInventory
                    modalIsOpen={modalIsOpen}
                    item={item}
                    deleteInventory={deleteInventory}
                  />
                </div>

                <Link to={`/inventory/edit/${item.id}`}>
                  <img
                    className="component__icon component__icon--edit"
                    src={editIcon}
                    alt="edit"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InventoryCard;
