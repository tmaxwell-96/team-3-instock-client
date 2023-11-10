import "./AddInventory.scss";
import { useEffect, useState } from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddInventory = () => {
  //State variables for field changes
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState();
  const [itemDescription, setItemDescription] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState(0);
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

  //Get category information
  const [inventoryList, setInventoryList] = useState([]);

  const getInventory = async () => {
    const response = await axios.get("http://localhost:8080/inventory");
    const allCategories = response.data.map((inventoryItem) => {
      return inventoryItem.category;
    });

    const uniqueCategories = [];
    allCategories.forEach((uniqueCategory) => {
      if (uniqueCategories.indexOf(uniqueCategory) === -1) {
        uniqueCategories.push(uniqueCategory);
      }
    });
    setInventoryList(uniqueCategories);
  };

  useEffect(() => {
    getInventory();
  }, []);

  //Get warehouse information
  const [warehouseList, setWarehouseList] = useState([]);

  useEffect(() => {
    const getWarehouses = async () => {
      const response = await axios.get("http://localhost:8080/warehouses");
      setWarehouseList(response.data);
    };
    getWarehouses();
  }, []);

  //Create new object function

  const createInventoryItem = async () => {
    const newInventory = {
      warehouse_id: warehouse,
      item_name: itemName,
      description: itemDescription,
      category: category,
      status: status,
      quantity: quantity,
    };

    const postInventory = async (newInv) => {
      const response = await axios.post(
        "http://localhost:8080/inventory",
        newInv
      );
    };
    postInventory(newInventory);
  };

  //Handle Submit Function
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    createInventoryItem(event);
    alert(
      "Thank you for submitting an inventory item! Returning to the inventory page."
    );
    navigate("/inventory");
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
            {inventoryList.map((uniqueCategory, index) => {
              return (
                <option key={index} value={uniqueCategory}>
                  {uniqueCategory}
                </option>
              );
            })}
          </select>
        </section>
        <section className="add-availability-container">
          <div className="add-inventory__radio-container">
            <input
              onChange={handleStatusChange}
              value="instock"
              name="status"
              type="radio"
              id="instock"
            />{" "}
            <label className="add-inventory__radio-label" htmlFor="inStock">
              In Stock
            </label>
            <input
              onChange={handleStatusChange}
              value="outstock"
              type="radio"
              name="status"
              id="outstock"
            />{" "}
            <label className="add-inventory__radio-label" htmlFor="outstock">
              Out of Stock
            </label>
          </div>

          <p
            className={`add-inventory__label ${
              status === "outstock" ? "add-inventory__label--hidden" : ""
            }`}
            htmlFor=""
          >
            Quantity
          </p>
          <input
            onChange={handleQuantityChange}
            value={quantity}
            name="quanity"
            className={`add-inventory__input ${
              status === "outstock" ? "add-inventory__input--hidden" : ""
            }`}
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
            {warehouseList.map((name) => {
              return (
                <option key={name.id} value={name.id}>
                  {name.warehouse_name}
                </option>
              );
            })}
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
