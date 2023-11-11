import "./WarehouseCard.scss";
import { useState, useEffect } from "react";
import arrowRight from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

const WarehouseCard = ({ warehouse, openModal }) => {
  if (warehouse) {
    return (
      <>
        <li className="warehouse-card">
          <div className="warehouse-card__left">
            <div className="warehouse-card__left-top">
              <div className="warehouse-card__column-warehouse">
                <p className="warehouse-card__label">WAREHOUSE</p>
                <Link
                  className="warehouse-card__text warehouse-card__text--link"
                  to={`/${warehouse.id}`}
                >
                  <p className="warehouse-card__text warehouse-card__text--link">
                    {`${warehouse.warehouse_name}  `}
                    <img src={arrowRight} alt="chevron right" />
                  </p>
                </Link>
              </div>
            </div>
            <div className="warehouse-card__left-bottom">
              <div className="warehouse-card__address warehouse-card__address--mobile">
                <p className="warehouse-card__label">ADDRESS</p>
                <p className="warehouse-card__text ">{warehouse.address}</p>
                <p className="warehouse-card__text ">
                  {warehouse.city}, {warehouse.country}
                </p>
              </div>
            </div>
            <img
              className=" warehouse-card__trash warehouse-card__trash--mobile"
              onClick={() => openModal(warehouse.id, warehouse.warehouse_name)}
              src={deleteIcon}
              alt="trash icon"
            />
          </div>
          <div className="warehouse-card__address warehouse-card__address--wide">
            <p className="warehouse-card__text ">{warehouse.address}</p>
            <p className="warehouse-card__text ">{warehouse.city},</p>
            <p>{warehouse.country}</p>
          </div>

          <div className="warehouse-card__right">
            <div className="warehouse-card__right-top">
              <p className="warehouse-card__label">CONTACT NAME</p>
              <p className="warehouse-card__text ">{warehouse.contact_name}</p>
            </div>
            <div className="warehouse-card__contact-trash">
              <div className="warehouse-card__right-bottom">
                <p className="warehouse-card__label">CONTACT INFORMATION</p>
                <p className="warehouse-card__text ">
                  {warehouse.contact_phone}
                </p>
                <p className="warehouse-card__text ">
                  {warehouse.contact_email}
                </p>
              </div>
              <img
                className="warehouse-card__trash warehouse-card__trash--wide"
                onClick={() =>
                  openModal(warehouse.id, warehouse.warehouse_name)
                }
                src={deleteIcon}
                alt="trash icon"
              />
              <Link
                className="warehouse-card__edit"
                to={`/edit/${warehouse.id}`}
              >
                <img src={editIcon} alt="writing icon" />
              </Link>
            </div>
          </div>
          <div className="warehouse-card__contact warehouse-card__contact--wide">
            <p className="warehouse-card__text ">{warehouse.contact_phone}</p>
            <p className="warehouse-card__text ">{warehouse.contact_email}</p>
          </div>

          <div className="warehouse-card__icons">
            <img
              className="warehouse-card__trash warehouse-card__trash--wide"
              onClick={() => openModal(warehouse.id, warehouse.warehouse_name)}
              src={deleteIcon}
              alt="trash icon"
            />
            <Link className="warehouse-card__edit" to={`/edit/${warehouse.id}`}>
              <img src={editIcon} alt="writing icon" />
            </Link>
          </div>
        </li>
      </>
    );
  }
};

export default WarehouseCard;
