import "./EditInventory.scss";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import axios from "axios";

const EditInventory = () => {
  const params = useParams();
  const [fieldDetails, setFieldDetails] = useState({});
  //State variables for field changes
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState();
  const [itemDescription, setItemDescription] = useState("");
  const [status, setStatus] = useState("");

  const [warehouse, setWarehouse] = useState();
  // const [submitted, setSubmitted] = useState(false);

  //Handle change functions

  const handleNameChange = (event) => {
    setItemName(event.target.value);
    // setSubmitted(false);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    // setSubmitted(false);
  };

  const handleDescrptionChange = (event) => {
    setItemDescription(event.target.value);
    // setSubmitted(false);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    // setSubmitted(false);
  };

  const handleWarehousehange = (event) => {
    setWarehouse(event.target.value);
    // setSubmitted(false);
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

  useEffect(() => {
    const getInventoryInfo = async () => {
      const response = await axios.get(
        `http://localhost:8080/inventory/${params.id}`
      );
      setFieldDetails(response.data[0]);
    };
    getInventoryInfo();
  }, []);

  console.log(fieldDetails);

  //Edit new object function

  const editInventoryItem = (event) => {
    const newInventory = {
      warehouse_id: "Need to figure this out",
      item_name: itemName,
      description: itemDescription,
      category: category,
      status: status,
      warehouse: warehouse,
    };
    console.log(newInventory);
  };

  //Handle Submit Function
  const handleSubmit = (event) => {
    event.preventDefault();
    editInventoryItem(event);
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
            placeholder={fieldDetails.item_name}
            onChange={handleNameChange}
            value={itemName}
          />
          <p className="edit-inventory__label">Description</p>
          <textarea
            className="edit-inventory__description"
            name=""
            placeholder={fieldDetails.description}
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
            {inventoryList.map((uniqueCategory, index) => {
              return (
                <option key={index} value={uniqueCategory}>
                  {uniqueCategory}
                </option>
              );
            })}
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
            {warehouseList.map((name) => {
              return (
                <option key={name.id} value={name.id}>
                  {name.warehouse_name}
                </option>
              );
            })}
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
