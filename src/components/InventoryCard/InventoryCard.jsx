import "./InventoryCard.scss";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";

import DeleteInventory from "../DeleteInventory/DeleteInventory";

Modal.setAppElement("#root");

const InventoryCard = ({ item, deleteInventory }) => {
  return (
    <>
      <div className="component__container">
        <section className="component">
          <div className="component__box">
            <div className="component__box--break component__box--breakleft">
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
                <div className="component__icon component__icon--delete2">
                  <DeleteInventory
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
