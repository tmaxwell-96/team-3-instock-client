import "./InventoryItemDetail.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import editWhite from "../../assets/Icons/edit-24px-white.svg";

const InventoryItemDetail = () => {
  return (
    <div className="item-detail">
      <div className="item-detail__header">
        <img src={backArrow} alt="back arrow" />
        <h2 className="item-detail__item">INVENTORY ITEM PLACEHOLDER</h2>
        <div className="item-detail__edit-wrapper">
          <img className="item-detail__edit" src={editWhite} alt="edit" />
          <p className="item-detail__edit-text">Edit</p>
        </div>
      </div>
      <div className="item-detail__content">
        <div className="item-detail__content-item">
          {" "}
          <label className="item-detail__label">ITEM DESCRIPTION:</label>
          <p className="item-detail__text">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem error hic doloremque deserunt pariatur voluptates.
          </p>
          <div className="item-detail__content-item-bottom">
            <label className="item-detail__label">CATEGORY:</label>
            <p className="item-detail__text">PLACEHOLDER CATEGORY</p>
          </div>
        </div>
        <div className="item-detail__content-status">
          <div className="item-detail__content-left">
            <label className="item-detail__label">STATUS:</label>
            <div className="item-detail__stock-wrapper">
              <p className="item-detail__text item-detail__text--stock">
                IN STOCK
              </p>
            </div>
            <div className="item-detail__content-status-bottom">
              <label className="item-detail__label">WAREHOUSE:</label>
              <p className="item-detail__text">PLACEHOLDER </p>
            </div>
          </div>
          <div className="item-detail__right">
            <label className="item-detail__label">QUANTITY:</label>
            <p className="item-detail__text">PLACEHOLDER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemDetail;
