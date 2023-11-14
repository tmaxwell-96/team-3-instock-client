import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import CloseButton from "./../../assets/Icons/close-24px.svg"
import "./ModalComponent.scss"

const ModalComopnent = ({ isOpen, onRequestClose, selectedWarehouse }) => {

  const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)', // Dim the background
      },
};

  const handleCancel = () =>{
    onRequestClose("false");
  };
  
  const handleDelete = async (e) =>{
    e.preventDefault();
    try{
      const response = await axios.delete(`http://localhost:8080/warehouses/${selectedWarehouse.id}`);
      onRequestClose("false");
    }catch(error){
      console.error("Error deleting warehouse:", error);
    }
  };

  return (
    <Modal className="modal-component"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >

      <div className='card'>
        <div className="card__close-btn">
          <img src={CloseButton} onClick={handleCancel} alt="close-button" />
        </div>
        <div className="card__container">
          <h1 className='card__header'>Delete {selectedWarehouse.warehouseName} warehouse?</h1>
          <p className='card__description'>Please confirm that you'd like to delete the {selectedWarehouse.warehouseName} from the list of warehouses. You won't be able to undo the action.</p>
        </div>
        <div className='card__button-pannel'>
            <button className='card__btn-cancel' onClick={handleCancel}>Cancel</button>
            <button className='card__btn-delete' onClick={handleDelete}>Delete</button>
        </div>
      </div>
        
     
    </Modal>
  );
};

export default ModalComopnent;