import "./WarehouseCard.scss";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import rightArrow from "../../assets/Icons/chevron_right-24px.svg";

const WarehouseCard = ({ warehouse }) => {
  if (warehouse) {
    return (
      <li className="warehouse-card">
        <div className="warehouse-card__left">
          <div className="warehouse-card__left-top">
            <p className="warehouse-card__label">WAREHOUSE</p>
            <Link className="warehouse-card__link" to={`/${warehouse.id}`}>
              <p className="warehouse-card__text">
                {`${warehouse.warehouse_name}`}
              </p>
              <img src={rightArrow} alt="" />
            </Link>
          </div>
          <div className="warehouse-card__left-bottom">
            <p className="warehouse-card__label">ADDRESS</p>
            <p className="warehouse-card__text ">{warehouse.address}</p>
            <p className="warehouse-card__text ">
              {warehouse.city}, {warehouse.country}
            </p>
          </div>
          <img src={deleteIcon} alt="trash icon" />
        </div>
        <div className="warehouse-card__right">
          <div className="warehouse-card__right-top">
            <p className="warehouse-card__label">CONTACT NAME</p>
            <p className="warehouse-card__text ">{warehouse.contact_name}</p>
          </div>
          <div className="warehouse-card__right-bottom">
            <p className="warehouse-card__label">CONTACT INFORMATION</p>
            <p className="warehouse-card__text ">{warehouse.contact_phone}</p>
            <p className="warehouse-card__text ">{warehouse.contact_email}</p>
          </div>
          <img
            className="warehouse-card__edit"
            src={editIcon}
            alt="writing icon"
          />
        </div>
      </li>
    );
  }
};

export default WarehouseCard;
