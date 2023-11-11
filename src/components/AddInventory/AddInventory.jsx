import "./AddInventory.scss";
import { useEffect, useState } from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import error from "../../assets/Icons/error-24px.svg";
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
  //Will add form validation sson
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
  };

  const handleQuantityChange = (event) => {
    const inputQuantity = event.target.value;
    setQuantity(inputQuantity || 0);
    setSubmitted(false);
  };

  const handleWarehousehange = (event) => {
    setWarehouse(event.target.value);
    setSubmitted(false);
  };

  const isFormValid = () => {
    if (
      !itemName ||
      !category ||
      !itemDescription ||
      !status ||
      (status === "instock" && !quantity) ||
      !warehouse
    ) {
      return false;
    } else {
      return true;
    }
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
      await axios.post("http://localhost:8080/inventory", newInv);
      console.log(newInventory);
    };
    postInventory(newInventory);
  };

  //Handle Submit Function
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (isFormValid()) {
      createInventoryItem(event);
      setItemName("");
      setItemDescription("");
      setCategory("");
      setStatus("");
      setQuantity(0);
      setWarehouse("");
      alert(
        "Thank you for submitting an inventory item! Returning to the inventory page."
      );
      navigate("/inventory");
    } else {
      alert("Please fill form fields");
    }
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
            className={`add-inventory__input ${
              submitted && !itemName ? "add-inventory--error" : ""
            }`}
            type="text"
            placeholder="Item Name"
            onChange={handleNameChange}
            value={itemName}
          />
          <div
            className={`add-inventory__error-details ${
              submitted && !itemName
                ? "add-inventory__error-details--hidden"
                : ""
            }`}
          >
            <img src={error} alt="error icon" />
            <p>This field is required</p>
          </div>
          <p className="add-inventory__label">Description</p>
          <textarea
            className={`add-inventory__description ${
              submitted && !itemDescription ? "add-inventory--error" : ""
            } `}
            name=""
            placeholder="Please enter a brief item description"
            onChange={handleDescrptionChange}
            value={itemDescription}
          ></textarea>
          <div
            className={`add-inventory__error-details ${
              submitted && !itemName
                ? "add-inventory__error-details--hidden"
                : ""
            }`}
          >
            <img src={error} alt="error icon" />
            <p>This field is required</p>
          </div>
          <p className="add-inventory__label">Category</p>
          <select
            className={`add-inventory__select ${
              submitted && !category ? "add-inventory--error" : ""
            }`}
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
          <div
            className={`add-inventory__error-details ${
              submitted && !category
                ? "add-inventory__error-details--hidden"
                : ""
            }`}
          >
            <img src={error} alt="error icon" />
            <p>This field is required</p>
          </div>
        </section>
        <section className="add-availability-container">
          <div className="add-inventory__radio-container">
            <input
              className={`add-inventory__radio ${
                submitted && !status ? "add-inventory--error" : ""
              }`}
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
              className={`add-inventory__radio ${
                submitted && !status ? "add-inventory--error" : ""
              }`}
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
          <div
            className={`add-inventory__error-details ${
              submitted && !status ? "add-inventory__error-details--hidden" : ""
            }`}
          >
            <img src={error} alt="error icon" />
            <p>This field is required</p>
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
            name="quantity"
            className={`add-inventory__input ${
              status === "outstock" ? "add-inventory__input--hidden" : ""
            } ${submitted && !quantity ? "add-inventory--error" : ""}`}
            type="text"
            placeholder="0"
          />

          <div
            className={`add-inventory__error-details ${
              submitted && !quantity
                ? "add-inventory__error-details--hidden"
                : ""
            }`}
          >
            <img src={error} alt="error icon" />
            <p>This field is required</p>
          </div>

          <p className="add-inventory__label" htmlFor="warehouse">
            Warehouse
          </p>
          <select
            onChange={handleWarehousehange}
            value={warehouse}
            name="warehouse"
            id=""
            className={`add-inventory__select ${
              submitted && !warehouse ? "add-inventory--error" : ""
            }`}
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
          <div
            className={`add-inventory__error-details ${
              submitted && !warehouse
                ? "add-inventory__error-details--hidden"
                : ""
            }`}
          >
            <img src={error} alt="error icon" />
            <p>This field is required</p>
          </div>
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
