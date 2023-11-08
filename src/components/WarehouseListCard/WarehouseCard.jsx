import "./WarehouseCard.scss";

const WarehouseCard = () => {
  return (
    <li className="warehouse-card">
      <div className="warehouse-card__left">
        <div className="warehouse-card__left-top">
          <h3 className="warehouse-card__text">WAREHOUSE</h3>
          <p className="warehouse-card__text warehouse-card__text-bold">
            placeholder
          </p>
        </div>
        <div className="warehouse-card__left-bottom">
          <h3 className="warehouse-card__text">ADDRESS</h3>
          <p className="warehouse-card__text ">placeholder</p>
        </div>
        <img src="" alt="trash icon" />
      </div>
      <div className="warehouse-card__left">
        <div className="warehouse-card__left-top">
          <h3 className="warehouse-card__text">CONTACT NAME</h3>
          <p className="warehouse-card__text warehouse-card__text-bold">
            placeholder
          </p>
        </div>
        <div className="warehouse-card__left-bottom">
          <h3 className="warehouse-card__text">CONTACT INFORMATION</h3>
          <p className="warehouse-card__text ">placeholder</p>
        </div>
        <img src="" alt="writing icon" />
      </div>
    </li>
  );
};

export default WarehouseCard;
