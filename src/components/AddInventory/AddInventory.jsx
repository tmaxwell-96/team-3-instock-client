import "./AddInventory.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";

const AddInventory = () => {
  return (
    <div className="add-inventory">
      <header className="add-inventory__header">
        <img src={backArrow} alt="back arrow" />
        <h2 className="add-inventory__title">Add new inventory item</h2>
      </header>
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
        <select name="" id="" placeholder="Please select"></select>
      </section>
      <section className="add-inventory__stock-container"></section>
    </div>
  );
};

export default AddInventory;
