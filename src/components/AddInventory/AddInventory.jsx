import "./AddInventory.scss";
import { useEffect, useState } from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

const AddInventory = () => {
  //State variables for field changes
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState();
  const [itemDescription, setItemDescription] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState();
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

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
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
      quantity: quantity,
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
    <div className="add-inventory">
      <header className="add-inventory__header">
        <Link to={`/inventory`}>
          <img src={backArrow} alt="back arrow" />
        </Link>

        <h2 className="add-inventory__title">Add new inventory item</h2>
      </header>
      <form className="add-inventory__form">
        <section className="add-inventory__details-container">
          <p className="add-inventory__label">Item Name</p>
          <input
            className="add-inventory__input"
            type="text"
            placeholder="Item Name"
            onChange={handleNameChange}
            value={itemName}
          />
          <p className="add-inventory__label">Description</p>
          <textarea
            className="add-inventory__description"
            name=""
            placeholder="Please enter a brief item description"
            onChange={handleDescrptionChange}
            value={itemDescription}
          ></textarea>
          <p className="add-inventory__label">Category</p>
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
        <section className="add-availability-container">
          <div className="add-inventory__radio-container">
            <input
              onChange={handleStatusChange}
              value="instock"
              type="radio"
              name="inStock"
              id=""
            />{" "}
            <label className="add-inventory__radio-label" htmlFor="inStock">
              In Stock
            </label>
            <input
              onChange={handleStatusChange}
              value="outstock"
              type="radio"
              name="outStock"
              id=""
            />{" "}
            <label className="add-inventory__radio-label" htmlFor="outstock">
              Out of Stock
            </label>
          </div>

          <p className="add-inventory__label" htmlFor="">
            Quantity
          </p>
          <input
            onChange={handleQuantityChange}
            value={quantity}
            name="quanity"
            className="add-inventory__input"
            type="text"
            placeholder="0"
          />
          <p className="add-inventory__label" htmlFor="warehouse">
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
          <div className="add-inventory__buttons">
            <button className="add-inventory__cancel">Cancel</button>
            <button onClick={handleSubmit} className="add-inventory__submit">
              + Add Item
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default AddInventory;
