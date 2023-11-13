import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./AddEditWarehouse.scss";
import { useParams } from "react-router-dom";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import ErrorIcon from "./../../assets/Icons/error-24px.svg";

const AddEditWarehouse = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;
  const [formData, setFormData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  const [error, setError] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  const validateForm = () => {
    const newFormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+\d{1,2} \(\d{3}\) \d{3}-\d{4}$/;
    if (formData.warehouse_name.trim() === "") {
      newFormErrors.warehouse_name = "Warehouse name is required";
    } else if (formData.address.trim() === "") {
      newFormErrors.address = "Address is required";
    } else if (formData.city.trim() === "") {
      newFormErrors.city = "City is required";
    } else if (formData.country.trim() === "") {
      newFormErrors.country = "Country is required";
    } else if (formData.contact_name.trim() === "") {
      newFormErrors.contact_name = "Contact name is required";
    } else if (formData.contact_position.trim() === "") {
      newFormErrors.contact_position = "Contact position is required";
    } else if (!phoneRegex.test(formData.contact_phone)) {
      newFormErrors.contact_phone = "Contact phone is invalid";
    } else if (!emailRegex.test(formData.contact_email)) {
      newFormErrors.contact_email = "Contact email is invalid";
    }
    setError(newFormErrors);
    return Object.keys(newFormErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    window.history.back();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    try {
      if (isEditMode && isValid) {
        await axios.put(`http://localhost:8080/warehouses/${id}`, formData);
        setFormData("");
        navigate("/");
      } else if (isValid) {
        await axios.post("http://localhost:8080/warehouses", formData);
        setFormData("");
        navigate("/");
      }
    } catch (error) {
      alert(
        `Error accessing the server, please try again later. Error code ${error}`
      );
    }
  };

  useEffect(() => {
    if (isEditMode) {
      try {
        const getWarehouseDataById = async () => {
          const response = await axios.get(
            `http://localhost:8080/warehouses/${id}`
          );
          setFormData(response.data);
        };
        getWarehouseDataById();
      } catch (error) {
        alert(
          `Error accessing the server, please try again later. Error code ${error}`
        );
      }
    }
  }, [id, isEditMode]);

  return (
    <>
      <div className="pannel-1"></div>
      <div className="warehouse">
        <div className="warehouse__header">
          <Link className="warehouse__arrow-link" to={"/"}>
            <img src={backArrow} alt="back arrow" />
            <h1 className="warehouse__header-title">
              {isEditMode ? "Edit Warehouse" : "Add New Warehouse"}
            </h1>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="warehouse__body">
            <div className="warehouse__details">
              <h2 className="warehouse__sub-header">Warehouse Details</h2>
              <div>
                <h3 className="warehouse__lbl">Warehouse Name</h3>
                <input
                  type="text"
                  name="warehouse_name"
                  placeholder="Warehouse Name"
                  value={formData.warehouse_name}
                  onChange={handleChange}
                  className={`warehouse__form-input ${
                    error.warehouse_name ? "warehouse__form-input--invalid" : ""
                  }`}
                />
                {error.warehouse_name && (
                  <div className="warehouse__error-container">
                    <img src={ErrorIcon} alt="Error" />{" "}
                    <div className="warehouse__error-message">
                      {error.warehouse_name}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h3 className="warehouse__lbl">Street Address</h3>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`warehouse__form-input ${
                    error.address ? "warehouse__form-input--invalid" : ""
                  }`}
                />
                {error.address && (
                  <div className="warehouse__error-container">
                    <img src={ErrorIcon} alt="Error" />{" "}
                    <div className="warehouse__error-message">
                      {error.address}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h3 className="warehouse__lbl">City</h3>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className={`warehouse__form-input ${
                    error.city ? "warehouse__form-input--invalid" : ""
                  }`}
                />
                {error.city && (
                  <div className="warehouse__error-container">
                    <img src={ErrorIcon} alt="Error" />{" "}
                    <div className="warehouse__error-message">{error.city}</div>
                  </div>
                )}
              </div>
              <div>
                <h3 className="warehouse__lbl">Country</h3>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`warehouse__form-input ${
                    error.country ? "warehouse__form-input--invalid" : ""
                  }`}
                />
                {error.country && (
                  <div className="warehouse__error-container">
                    <img src={ErrorIcon} alt="Error" />{" "}
                    <div className="warehouse__error-message">
                      {error.country}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="warehouse__vertical-line"></div>
            <div className="warehouse__details">
              <h2 className="warehouse__sub-header">Contact Details</h2>
              <div>
                <h3 className="warehouse__lbl">Contact Name</h3>
                <input
                  type="text"
                  name="contact_name"
                  placeholder="Contact Name"
                  value={formData.contact_name}
                  onChange={handleChange}
                  className={`warehouse__form-input ${
                    error.contact_name ? "warehouse__form-input--invalid" : ""
                  }`}
                />
                {error.contact_name && (
                  <div className="warehouse__error-container">
                    <img src={ErrorIcon} alt="Error" />{" "}
                    <div className="warehouse__error-message">
                      {error.contact_name}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h3 className="warehouse__lbl">Position</h3>
                <input
                  type="text"
                  name="contact_position"
                  placeholder="Position"
                  value={formData.contact_position}
                  onChange={handleChange}
                  className={`warehouse__form-input ${
                    error.contact_position
                      ? "warehouse__form-input--invalid"
                      : ""
                  }`}
                />
                {error.contact_position && (
                  <div className="warehouse__error-container">
                    <img src={ErrorIcon} alt="Error" />{" "}
                    <div className="warehouse__error-message">
                      {error.contact_position}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h3 className="warehouse__lbl">Phone Number</h3>
                <input
                  type="text"
                  name="contact_phone"
                  placeholder="Phone Number"
                  value={formData.contact_phone}
                  onChange={handleChange}
                  className={`warehouse__form-input ${
                    error.contact_phone ? "warehouse__form-input--invalid" : ""
                  }`}
                />
                {error.contact_phone && (
                  <div className="warehouse__error-container">
                    <img src={ErrorIcon} alt="Error" />{" "}
                    <div className="warehouse__error-message">
                      {error.contact_phone}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h3 className="warehouse__lbl">Email</h3>
                <input
                  type="text"
                  name="contact_email"
                  placeholder="Email"
                  value={formData.contact_email}
                  onChange={handleChange}
                  className={`warehouse__form-input ${
                    error.contact_email ? "warehouse__form-input--invalid" : ""
                  }`}
                />
                {error.contact_email && (
                  <div className="warehouse__error-container">
                    <img src={ErrorIcon} alt="Error" />{" "}
                    <div className="warehouse__error-message">
                      {error.contact_email}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="warehouse__button-pannel">
            <button onClick={handleCancel} className="warehouse__btn-cancel">
              Cancel
            </button>
            <button className="warehouse__btn-add">
              {isEditMode ? "Save" : "+ Add Warehouse"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEditWarehouse;
