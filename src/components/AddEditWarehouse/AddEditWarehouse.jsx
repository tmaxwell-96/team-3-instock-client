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
        <div className="warehouse">
            <div className="warehouse__header">
                <Link to={"/"}>
                    <img src={backArrow} alt="back arrow" />
                    <h2 className="warehouse__header-title">
                        {isEditMode ? 'Edit Warehouse' : 'Add New Warehouse'}
                    </h2>
                </Link>
            </div>
        </div>
        
        </>
    );
}

export default AddEditWarehouse;