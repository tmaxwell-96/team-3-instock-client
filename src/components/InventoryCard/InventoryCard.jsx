import "./InventoryCard.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Modal from "react-modal";
import xIcon from "../../assets/Icons/close-24px.svg";
import axios from "axios";

const deleteModal = document.getElementById("deleteModal");

Modal.setAppElement("#root");

const InventoryCard = ({ item, deleteInventory }) => {
  //Modal Component
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
      <div className="component__container">
        <section className="component">
          {/* !-- This is the part that should be rendered by javascript according to each Item --> */}
          <div className="component__box">
            <div className="component__box--break">
              <div className="component__item">
                <div className="component__subheader component__subheader--column">
                  <span className="component__detail">INVENTORY ITEM</span>
                </div>

                <Link to={`/inventory/${item.id}`}>
                  <div className="component__txt">
                    <span className="component__detail">{item.item_name}</span>
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
                  <img
                    className=" component__icon--delete1"
                    onClick={openModal}
                    src={deleteIcon}
                    alt="delete"
                  />
                </div>
              </div>
            </div>

            <div className="component__box--break component__box--breakright">
              <div className="component__item">
                <div className="component__subheader component__subheader--column">
                  <span className="component__detail"> STATUS </span>
                </div>
                <div className="component__txt">
                  <span className="component__detail"> {item.quantity} </span>
                </div>
              </div>

              <div className="component__item">
                <div className="component__subheader component__subheader--column">
                  <span className="component__detail"> QTY </span>
                </div>
                <div className="component__txt">
                  <span className="component__detail">
                    {" "}
                    {item.warehouse_name}
                  </span>
                </div>
              </div>

              <div className="component__item">
                <div className="component__subheader component__subheader--column">
                  <span className="component__detail">WAREHOUSE</span>
                </div>
                <div className="component__txt">
                  <span className="component__detail component__detail--disply-non">
                    Manhattan
                  </span>
                </div>
              </div>

              <div className="component__item">
                <img
                  className="component__icon component__icon--delete2"
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
                    <img
                      onClick={closeModal}
                      className="modal__close"
                      src={xIcon}
                      alt=""
                    />
                    <h2
                      className="modal__title"
                      // ref={(_subtitle) => (subtitle = _subtitle)}
                    >
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

                <Link to="edit">
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
