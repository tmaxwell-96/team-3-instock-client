import { useEffect, useState } from 'react';
import {useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import "./AddEditWarehouse.scss";
import { useParams } from 'react-router-dom';
import backArrow from "../../assets/Icons/arrow_back-24px.svg";

const AddEditWarehouse = () =>{
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();
    const isEditMode = !!id;

    useEffect(() =>{
        if (isEditMode){
            const getWarehouseDataById = async () =>{
                const response = await axios.get(`http://localhost:8080/warehouses/${id}`);
                setFormData(response.data);
                console.log(response.data);
            }
            getWarehouseDataById();
        }
        
    }, [id, isEditMode]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (isEditMode){
            const data = formData;
            console.log(data);
            const response = await axios.put(`http://localhost:8080/warehouses/${id}`, formData);
        }
        else{
            const response = await axios.post("http://localhost:8080/warehouses", formData);
        }
        
        setFormData('');
        navigate("/");
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleCancel = (e) =>{
        e.preventDefault();
        window.history.back();
    };
    return(
        <>
        <div className='pannel-1'>

        </div>
        <div className="warehouse">
            <div className="warehouse__header">
                <Link className='warehouse__arrow-link' to={"/"}>
                    <img src={backArrow} alt="back arrow" />
                    <h1 className="warehouse__header-title">
                        {isEditMode ? 'Edit Warehouse' : 'Add New Warehouse'}
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
                            placeholder='Warehouse Name'
                            value={formData.warehouse_name}
                            onChange={handleChange}
                            className={`warehouse__form-input ${
                                formData.warehouse_name ? "" : "warehouse__form-input--invalid"
                              }`}
                        />
                    </div> 
                    <div>
                        <h3 className="warehouse__lbl">Street Address</h3>
                        <input 
                            type="text" 
                            name="address"
                            placeholder='Address'
                            value={formData.address}
                            onChange={handleChange}
                            className={`warehouse__form-input ${
                                formData.address ? "" : "warehouse__form-input--invalid"
                              }`}
                            />
                    </div> 
                    <div>
                        <h3 className="warehouse__lbl">City</h3>
                        <input  
                            type="text" 
                            name="city"
                            placeholder='City'
                            value={formData.city}
                            onChange={handleChange}
                            className={`warehouse__form-input ${
                                formData.city ? "" : "warehouse__form-input--invalid"
                              }`}
                            />
                    </div> 
                    <div>
                        <h3 className="warehouse__lbl">Country</h3>
                        <input 
                            type="text" 
                            name="country"
                            placeholder='Country'
                            value={formData.country}
                            onChange={handleChange}
                            className={`warehouse__form-input ${
                                formData.country ? "" : "form__form-input--invalid"
                              }`}
                            />
                    </div> 
                    
                </div>
                <div class="warehouse__vertical-line"></div>
                <div className="warehouse__details">
                    <h2 className="warehouse__sub-header">Contact Details</h2>
                    <div>
                        <h3 className="warehouse__lbl">Contact Name</h3>
                        <input 
                            type="text" 
                            name="contact_name"
                            placeholder='Contact Name'
                            value={formData.contact_name}
                            onChange={handleChange}
                            className={`warehouse__form-input ${
                                formData.contact_name ? "" : "warehouse__form-input--invalid"
                              }`}
                        />
                    </div> 
                    <div>
                        <h3 className="warehouse__lbl">Position</h3>
                        <input  
                            type="text" 
                            name="contact_position"
                            placeholder='Position'
                            value={formData.contact_position}
                            onChange={handleChange}
                            className={`warehouse__form-input ${
                                formData.contact_position ? "" : "warehouse__form-input--invalid"
                              }`}
                        />
                    </div> 
                    <div>
                        <h3 className="warehouse__lbl">Phone Number</h3>
                        <input 
                            type="text" 
                            name="contact_phone"
                            placeholder='Phone Number'
                            value={formData.contact_phone}
                            onChange={handleChange}
                            className={`warehouse__form-input ${
                                formData.contact_phone ? "" : "warehouse__form-input--invalid"
                              }`}
                        />
                    </div> 
                    <div>
                        <h3 className="warehouse__lbl">Email</h3>
                        <input 
                            type="text" 
                            name="contact_email"
                            placeholder='Email'
                            required
                            value={formData.contact_email}
                            onChange={handleChange}
                            className={`warehouse__form-input ${
                                formData.contact_email ? "" : "warehouse__form-input--invalid"
                              }`}
                        />
                    </div>
                </div>
                </div>
                <div className="warehouse__button-pannel">
                    <button onClick={handleCancel} className="warehouse__btn-cancel">Cancel</button>
                    <button className="warehouse__btn-add">
                        {isEditMode ? 'Save' : '+ Add Warehouse'}
                    </button>
                </div>
            </form>
        </div>
        
        </>
    );
}

export default AddEditWarehouse;