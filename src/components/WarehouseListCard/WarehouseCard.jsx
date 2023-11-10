import "./WarehouseCard.scss";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import ModalComopnent from './../../components/ModalComopnent/ModalComopnent';

const WarehouseCard = ({ warehouse }) => {
  
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState({
    id: null,
    name: '',
  });

  const openModal = (id, warehouseName) => {
    setModalOpen(true);
    setSelectedWarehouse({id, warehouseName});
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (warehouse) {
    return (
      <>
    
      <li className="warehouse-card">
        <div className="warehouse-card__left">
          <div className="warehouse-card__left-top">
            <p className="warehouse-card__text">WAREHOUSE</p>
            <Link to={`/${warehouse.id}`}>
              <p className="warehouse-card__text warehouse-card__text--link">
                {`${warehouse.warehouse_name}   >`}
              </p>
            </Link>
          </div>
          <div className="warehouse-card__left-bottom">
            <p className="warehouse-card__text">ADDRESS</p>
            <p className="warehouse-card__text ">{warehouse.address}</p>
            <p className="warehouse-card__text ">
              {warehouse.city}, {warehouse.country}
            </p>
          </div>
          <img onClick={()=> openModal(warehouse.id, warehouse.warehouse_name)} src={deleteIcon} alt="trash icon" />
        </div>
        <div className="warehouse-card__right">
          <div className="warehouse-card__right-top">
            <p className="warehouse-card__text">CONTACT NAME</p>
            <p className="warehouse-card__text ">{warehouse.contact_name}</p>
          </div>
          <div className="warehouse-card__right-bottom">
            <p className="warehouse-card__text">CONTACT INFORMATION</p>
            <p className="warehouse-card__text ">{warehouse.contact_phone}</p>
            <p className="warehouse-card__text ">{warehouse.contact_email}</p>
          </div>
          <Link to={`/${warehouse.id}`}><img src={editIcon} alt="writing icon" /></Link>
          
        </div>
      </li>

      <ModalComopnent isOpen={isModalOpen} onRequestClose={closeModal} selectedWarehouse={selectedWarehouse} />
      </>

    );
  }
};

export default WarehouseCard;
