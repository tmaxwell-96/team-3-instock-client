import "./InventoryCard.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";
const InventoryCard = ({ item }) => {
  return (
    <>
      <div className="component__container">
        <section className="component">
          {/* !-- This is the part that should be rendered by javascript according to each Item --> */}
          <div className="component__box">
            <div className="component__box--break">
              <div className="component__item">
                <div className="component__subheader component__subheader--column">
                  <span className="component__detail">INVENTORY ITEM</span>
                </div>

                <Link to={`/inventory/${item.id}`}>
                  <div className="component__txt">
                    <span className="component__detail">{item.item_name}</span>
                  </div>
                </Link>
              </div>

              <div className="component__item">
                <div className="component__subheader component__subheader--column">
                  <span className="component__detail">CATEGORY</span>
                </div>
                <div className="component__txt">
                  <span className="component__detail">{item.category}</span>
                </div>
                <div className="component__txt">
                  <img
                    className=" component__icon--delete1"
                    src={deleteIcon}
                    alt="delete"
                  />
                </div>
              </div>
            </div>

            <div className="component__box--break component__box--breakright">
              <div className="component__item">
                <div className="component__subheader component__subheader--column">
                  <span className="component__detail"> STATUS </span>
                </div>
                <div className="component__txt">
                  <span className="component__detail"> {item.quantity} </span>
                </div>
              </div>

              <div className="component__item">
                <div className="component__subheader component__subheader--column">
                  <span className="component__detail"> QTY </span>
                </div>
                <div className="component__txt">
                  <span className="component__detail">
                    {" "}
                    {item.warehouse_name}
                  </span>
                </div>
              </div>

              <div className="component__item">
                <div className="component__subheader component__subheader--column">
                  <span className="component__detail">WAREHOUSE</span>
                </div>
                <div className="component__txt">
                  <span className="component__detail component__detail--disply-non">
                    Manhattan
                  </span>
                </div>
              </div>

              <div className="component__item">
                <img
                  className="component__icon component__icon--delete2"
                  src={deleteIcon}
                  alt="delete"
                />
                <Link to={`edit/${item.id}`}>
                  <img
                    className="component__icon component__icon--edit"
                    src={editIcon}
                    alt="edit"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InventoryCard;
