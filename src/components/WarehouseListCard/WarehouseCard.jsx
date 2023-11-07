import "./WarehouseCard.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

const WarehouseCard = ({ warehouse }) => {
  if (warehouse) {
    return (
      <li className="warehouse-card">
        <div className="warehouse-card__left">
          <div className="warehouse-card__left-top">
            <p className="warehouse-card__text">WAREHOUSE</p>
            <p className="warehouse-card__text warehouse-card__text-bold">
              {`${warehouse.warehouse_name}   >`}
            </p>
          </div>
          <div className="warehouse-card__left-bottom">
            <p className="warehouse-card__text">ADDRESS</p>
            <p className="warehouse-card__text ">{warehouse.address}</p>
            <p className="warehouse-card__text ">
              {warehouse.city}, {warehouse.country}
            </p>
          </div>
          <img src={deleteIcon} alt="trash icon" />
        </div>
        <div className="warehouse-card__right">
          <div className="warehouse-card__right-top">
            <p className="warehouse-card__text">CONTACT NAME</p>
            <p className="warehouse-card__text warehouse-card__text-bold">
              {warehouse.contact_name}
            </p>
          </div>
          <div className="warehouse-card__right-bottom">
            <p className="warehouse-card__text">CONTACT INFORMATION</p>
            <p className="warehouse-card__text ">{warehouse.contact_phone}</p>
            <p className="warehouse-card__text ">{warehouse.contact_email}</p>
          </div>
          <img src={editIcon} alt="writing icon" />
        </div>
      </li>
    );
  }
};

export default WarehouseCard;
