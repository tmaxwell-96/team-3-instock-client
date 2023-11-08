import "./InventoryCard.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
const InventoryCard = () => {
  return (
    <li className="inventory-card">
      <div className="inventory-card__left">
        <div className="inventory-card__left-top">
          <p className="inventory-card__text">INVENTORY ITEMS</p>

          <p className="inventory-card__text inventory-card__text--link">
            {`PLACEHOLDER `}
          </p>
        </div>
        <div className="inventory-card__left-bottom">
          <p className="inventory-card__text">CATEGORY</p>
          <p className="inventory-card__text ">PLACEHOLDER CATEGORY</p>
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
          <p className="inventory-card__text ">PLACEHOLDER-INSTOCK</p>
        </div>
        <div className="inventory-card__right-bottom">
          <p className="inventory-card__text">QTY</p>
          <p className="inventory-card__text ">PLACEHOLDER-QTY</p>
          <p className="inventory-card__text ">WAREHOUSE</p>
          <p className="inventory-card__text ">PLACEHOLDER-WAREHOUSE</p>
        </div>
        <img src={editIcon} alt="writing icon" />
      </div>
    </li>
  );
};

export default InventoryCard;
