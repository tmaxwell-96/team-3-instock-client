import "./AddInventory.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";

const AddInventory = () => {
  return (
    <div className="add-inventory">
      <header className="add-inventory__header">
        <img src={backArrow} alt="back arrow" />
        <h2 className="add-inventory__title">Add new inventory item</h2>
      </header>
      <form className="add-inventory__form">
        <section className="add-inventory__details-container">
          <p className="add-inventory__label">Item Name</p>
          <input
            className="add-inventory__input"
            type="text"
            placeholder="Item Name"
          />
          <p className="add-inventory__label">Description</p>
          <textarea
            className="add-inventory__description"
            name=""
            placeholder="Please enter a brief item description"
          ></textarea>
          <p className="add-inventory__label">Category</p>
          <select name="" id="" placeholder="Please select">
            <option value="">Please Select</option>
          </select>
        </section>
        <section className="add-availability-container">
          <div className="add-inventory__radio-container">
            <input type="radio" name="inStock" id="" />{" "}
            <label className="add-inventory__radio-label" htmlFor="inStock">
              In Stock
            </label>
            <input type="radio" name="outStock" id="" />{" "}
            <label className="add-inventory__radio-label" htmlFor="outstock">
              Out of Stock
            </label>
          </div>

          <p className="add-inventory__label" htmlFor="">
            Quantity
          </p>
          <input
            name="quanity"
            className="add-inventory__input"
            type="text"
            placeholder="0"
          />
          <p className="add-inventory__label" htmlFor="warehouse">
            Warehouse
          </p>
          <select name="warehouse" id="">
            <option value="">Please Select</option>
          </select>
          <div className="add-inventory__buttons">
            <button className="add-inventory__cancel">Cancel</button>
            <button className="add-inventory__submit">+ Add Item</button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default AddInventory;
