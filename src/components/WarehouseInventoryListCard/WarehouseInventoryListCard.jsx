import "./WarehouseInventoryListCard.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Modal from "react-modal";

const deleteModal = document.getElementById("deleteModal");

Modal.setAppElement("#root");

const WarehouseInventoryListCard = ({ item, deleteInventory }) => {
  //Modal warehouse-inventory-card
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // subtitle.style.color = "black";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <section className="warehouse-inventory-card">
        <div className="warehouse-inventory-card__wrapper">
          {/* !-- This is the part that should be rendered by javascript according to each Item --> */}
          <div className="warehouse-inventory-card__container-left">
            <div className="warehouse-inventory-card__item-container">
              <span className="warehouse-inventory-card__detail, warehouse-inventory-card__detail--mobile">
                INVENTORY ITEM
              </span>
              <Link
                className="warehouse-inventory-card__txt--link"
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
            <div className="warehouse-inventory-card__category-container">
              <div className="warehouse-inventory-card__subheader warehouse-inventory-card__subheader--column">
                <span className="warehouse-inventory-card__detail, warehouse-inventory-card__detail--mobile">
                  CATEGORY
                </span>
              </div>
              <div className="warehouse-inventory-card__txt">
                <span className="warehouse-inventory-card__detail">
                  {item.category}
                </span>
              </div>
            </div>
          </div>
          <div className="warehouse-inventory-card__container-right">
            <div className="warehouse-inventory-card__category-container">
              <label className="warehouse-inventory-card__label, warehouse-inventory-card__detail--mobile">
                STATUS:
              </label>
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
            <div className="warehouse-inventory-card__quantity-container">
              <span className="warehouse-inventory-card__detail, warehouse-inventory-card__detail--mobile">
                {" "}
                QTY{" "}
              </span>

              <div className="warehouse-inventory-card__txt">
                <span className="warehouse-inventory-card__detail warehouse-inventory-card__detail--QTY">
                  {" "}
                  {item.quantity}
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="warehouse-inventory-card__action-container">
          {" "}
          <img
            className="warehouse-inventory-card__icon warehouse-inventory-card__icon--delete2"
            src={deleteIcon}
            alt="delete"
            id="deleteModal"
            onClick={openModal}
          />
          <Modal
            className={`modal`}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
          >
            <div className="modal__wrapper">
              <h2 className="modal__title">
                {`Delete ${item.item_name} inventory item?`}
              </h2>
              <p>
                {`Please confirm that you'd like to delete ${item.item_name} from the inventory list. You won't be able to undo this action`}
              </p>
              <div className="modal__bottom">
                <button className="modal__cancel" onClick={closeModal}>
                  Cancel
                </button>
                <button
                  onClick={() => {
                    deleteInventory(item.id);
                    closeModal();
                  }}
                  className="modal__delete"
                >
                  Delete
                </button>
              </div>
            </div>
          </Modal>
          <Link to={`/inventory/edit/${item.id}`}>
            <img
              className="warehouse-inventory-card__icon warehouse-inventory-card__icon--edit"
              src={editIcon}
              alt="edit"
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default WarehouseInventoryListCard;
