import React from 'react';
import Modal from 'react-modal';


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
const handleCancel = (e) =>{
  // e.preventDefault();
  // window.history.back();
};


const ModalComopnent = ({ isOpen, onRequestClose, selectedWarehouse }) => {
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
        <button className='btn-delete'>Delete</button>
      </div>
    </Modal>
  );
};

export default ModalComopnent;