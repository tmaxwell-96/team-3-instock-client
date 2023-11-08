import "./InventoryItemDetail.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";

const InventoryItemDetail = () => {
  return (
    <div className="item-detail">
      <div className="item-detail__header">
        <img src={backArrow} alt="back arrow" />
        <h2 className="item-detail__item">INVENTORY ITEM PLACEHOLDER</h2>
        <div className="item-detail__edit-wrapper">
          <img className="item-detail__edit" src={edit} alt="edit" />
        </div>
      </div>
    </div>
  );
};

export default InventoryItemDetail;
