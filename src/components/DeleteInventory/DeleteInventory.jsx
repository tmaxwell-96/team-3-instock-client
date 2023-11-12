import React, { useState } from "react";
import Modal from "react-modal";
import xIcon from "../../assets/Icons/close-24px.svg";
import trashIcon from "../../assets/Icons/delete_outline-24px.svg";
import "./DeleteInventory.scss";

Modal.setAppElement("#root");

const DeleteInventory = ({ item, deleteInventory }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <img onClick={openModal} src={trashIcon} alt="trash icon" />
      <Modal
        className={`modal`}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className="modal__wrapper">
          <img
            onClick={closeModal}
            className="modal__close"
            src={xIcon}
            alt=""
          />
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
    </div>
  );
};

export default DeleteInventory;
