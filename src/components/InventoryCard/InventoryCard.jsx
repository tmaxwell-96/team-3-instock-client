import "./InventoryCard.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";
const InventoryCard = ({ item }) => {
  return (
    <li className="inventory-card">
      <div className="inventory-card__left">
        <div className="inventory-card__left-top">
          <p className="inventory-card__text">INVENTORY ITEM</p>

          <Link
            to={`/inventory/${item.id}`}
            className="inventory-card__text inventory-card__text--link"
          >
            {item.item_name}
          </Link>
        </div>
        <div className="inventory-card__left-bottom">
          <p className="inventory-card__text">CATEGORY</p>
          <p className="inventory-card__text ">{item.category}</p>
        </div>
        <img
          className="inventory-card__delete"
          src={deleteIcon}
          alt="trash icon"
        />
      </div>
      <div className="inventory-card__right">
        <div className="inventory-card__right-top">
          <p className="inventory-card__text">STATUS</p>
          <p className="inventory-card__text ">{item.status}</p>
        </div>
        <div className="inventory-card__right-bottom">
          <p className="inventory-card__text">QTY</p>
          <p className="inventory-card__text ">{item.quantity}</p>
          <p className="inventory-card__text ">WAREHOUSE</p>
          <p className="inventory-card__text ">{item.warehouse_name}</p>
        </div>
        <img src={editIcon} alt="writing icon" />
      </div>
    </li>
  );
};

export default InventoryCard;
