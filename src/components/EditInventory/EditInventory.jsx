import "./EditInventory.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";

const EditInventory = () => {
  //State variables for field changes
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState();
  const [itemDescription, setItemDescription] = useState("");
  const [status, setStatus] = useState("");

  const [warehouse, setWarehouse] = useState();
  const [submitted, setSubmitted] = useState(false);

  //Handle change functions

  const handleNameChange = (event) => {
    setItemName(event.target.value);
    setSubmitted(false);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setSubmitted(false);
  };

  const handleDescrptionChange = (event) => {
    setItemDescription(event.target.value);
    setSubmitted(false);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    setSubmitted(false);
  };

  const handleWarehousehange = (event) => {
    setWarehouse(event.target.value);
    setSubmitted(false);
  };

  //Create new object function

  const createInventoryItem = (event) => {
    const newInventory = {
      warehouse_id: "Need to figure this out",
      item_name: itemName,
      description: itemDescription,
      category: category,
      status: status,

      warehouse: warehouse,
      created_at: Date.now(),
      updated_at: Date.now(),
    };
    console.log(newInventory);
  };

  //Handle Submit Function
  const handleSubmit = (event) => {
    event.preventDefault();
    createInventoryItem(event);
  };

  return (
    <div className="edit-inventory">
      <header className="edit-inventory__header">
        <Link to={`/inventory`}>
          <img src={backArrow} alt="back arrow" />
        </Link>

        <h2 className="edit-inventory__title">Edit new inventory item</h2>
      </header>
      <form className="edit-inventory__form">
        <section className="edit-inventory__details-container">
          <p className="edit-inventory__label">Item Name</p>
          <input
            className="edit-inventory__input"
            type="text"
            placeholder="Item Name"
            onChange={handleNameChange}
            value={itemName}
          />
          <p className="edit-inventory__label">Description</p>
          <textarea
            className="edit-inventory__description"
            name=""
            placeholder="Please enter a brief item description"
            onChange={handleDescrptionChange}
            value={itemDescription}
          ></textarea>
          <p className="edit-inventory__label">Category</p>
          <select
            onChange={handleCategoryChange}
            value={category}
            name=""
            id=""
            placeholder="Please select"
          >
            <option value="">Please Select</option>
            <option value="Category1">Category1</option>
            <option value="Category2">Category2</option>
          </select>
        </section>
        <section className="edit-availability-container">
          <h3 className="edit-inventory__subheading">Item Availability</h3>
          <p className="edit-inventory__label">Status</p>
          <div className="edit-inventory__radio-container">
            <input
              onChange={handleStatusChange}
              value="instock"
              type="radio"
              name="inStock"
              id=""
            />{" "}
            <label className="edit-inventory__radio-label" htmlFor="inStock">
              In Stock
            </label>
            <input
              onChange={handleStatusChange}
              value="outstock"
              type="radio"
              name="outStock"
              id=""
            />{" "}
            <label className="edit-inventory__radio-label" htmlFor="outstock">
              Out of Stock
            </label>
          </div>

          <p className="edit-inventory__label" htmlFor="warehouse">
            Warehouse
          </p>
          <select
            onChange={handleWarehousehange}
            value={warehouse}
            name="warehouse"
            id=""
          >
            <option value="">Please Select</option>
            <option value="Warehouse1">Warehouse1</option>
            <option value="Warehouse2">Warehouse2</option>
          </select>
          <div className="edit-inventory__buttons">
            <button className="edit-inventory__cancel">Cancel</button>
            <button onClick={handleSubmit} className="edit-inventory__submit">
              Save
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};
export default EditInventory;
