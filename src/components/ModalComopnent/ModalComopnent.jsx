import { useState } from 'react';
import {useNavigate  } from 'react-router-dom'
import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const ModalComopnent = ({ isOpen, onRequestClose, selectedWarehouse }) => {

  const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)', // Dim the background
      },
  content: {
    width: '500px',
    height: '250px',
    margin: 'auto',
    
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
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
    
      <h2>Delete {selectedWarehouse.warehouseName} warehouse?</h2>
      <p>Please confirm that you'd like to delete the {selectedWarehouse.warehouseName} from the list of warehouses. You won't be able to undo the action.</p>
      <div>
        <button className='cancel' onClick={handleCancel}>Cancel</button>
        <button className='btn-delete' onClick={handleDelete}>Delete</button>
      </div>
    </Modal>
  );
};

export default ModalComopnent;