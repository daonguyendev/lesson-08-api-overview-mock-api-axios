import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_PREFIX } from "../../../constants/AppConstant";

const ProductAdd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    imgUrl: "",
    type: "all",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_PREFIX}/products`, formData);
      alert("Product added successfully!");
      navigate("/product");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <div className="main-content">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            type="number"
          />
        </div>
        <div>
          <label>Quantity: </label>
          <input
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            type="number"
          />
        </div>
        <div>
          <label>Image URL: </label>
          <input
            name="imgUrl"
            value={formData.imgUrl}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Type: </label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="women">Women</option>
            <option value="men">Men</option>
          </select>
        </div>
        <button className="btn btn-submission" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
