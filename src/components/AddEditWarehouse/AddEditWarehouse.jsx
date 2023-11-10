import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AddEditWarehouse.scss";
import { useParams } from 'react-router-dom';

const AddEditWarehouse = () =>{
    const [formData, setFormData] = useState({});
    const [warehouseData, setWarehouseData] = useState([]);
    const {id} = useParams();
    
    const isEditMode = !!id;

    useEffect(() =>{
        if (isEditMode){
            const getWarehouseDataById = async () =>{
                const response = await axios.get(`http://localhost:8080/warehouses/${id}`);
                setWarehouseData(response.data);
                console.log(response.data);
            }
            getWarehouseDataById();
        }
        
    }, [id, isEditMode]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (isEditMode){
            const response = await axios.put(`http://localhost:8080/warehouses/${id}`, formData);
        }
        else{
            const response = await axios.post("http://localhost:8080/warehouses", formData);
        }
        
        setFormData('');
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
            <div className="header-pannel">
                <h1 className="header-title">
                {isEditMode ? 'Edit Warehouse' : 'Add New Warehouse'}
                </h1> 
            </div>
            <form onSubmit={handleSubmit}>

            <div className="body-pannel">
                <div className="warehouse-details">
                    <h2 className="sub-header">Warehouse Details</h2>
                    <div>
                        <h4 className="lbl">Warehouse Name</h4>
                        <input 
                            className="input-fld" 
                            type="text" 
                            name="warehouse_name"
                            value={warehouseData.warehouse_name}
                            onChange={handleChange}
                        />
                    </div> 
                    <div>
                        <h4 className="lbl">Street Address</h4>
                        <input 
                            className="input-fld" 
                            type="text" 
                            name="address"
                            value={warehouseData.address}
                            onChange={handleChange}
                            />
                    </div> 
                    <div>
                        <h4 className="lbl">City</h4>
                        <input 
                            className="input-fld" 
                            type="text" 
                            name="city"
                            value={warehouseData.city}
                            onChange={handleChange}/>
                    </div> 
                    <div>
                        <h4 className="lbl">Country</h4>
                        <input 
                            className="input-fld" 
                            type="text" 
                            name="country"
                            value={warehouseData.country}
                            onChange={handleChange}/>
                    </div> 
                    
                </div>
                <div className="contact-details">
                <h2 className="sub-header">Contact Details</h2>
                <div>
                        <h4 className="lbl">Contact Name</h4>
                        <input 
                            className="input-fld" 
                            type="text" 
                            name="contact_name"
                            value={warehouseData.contact_name}
                            onChange={handleChange}/>
                    </div> 
                    <div>
                        <h4 className="lbl">Position</h4>
                        <input 
                            className="input-fld" 
                            type="text" 
                            name="contact_position"
                            value={warehouseData.contact_position}
                            onChange={handleChange}/>
                    </div> 
                    <div>
                        <h4 className="lbl">Phone Number</h4>
                        <input 
                            className="input-fld" 
                            type="text" 
                            name="contact_phone"
                            value={warehouseData.contact_phone}
                            onChange={handleChange}/>
                    </div> 
                    <div>
                        <h4 className="lbl">Email</h4>
                        <input 
                            className="input-fld" 
                            type="text" 
                            name="contact_email"
                            value={warehouseData.contact_email}
                            onChange={handleChange}/>
                    </div>

                </div>

            </div>
            <div className="footer-pannel">
                <button onClick={handleCancel} className="btn-cancel">Cancel</button>
                <button className="btn-add">
                {isEditMode ? 'Save' : 'Add Warehouse'}
                </button>
            </div>
            </form>
        
        </>
    );

}

export default AddEditWarehouse;