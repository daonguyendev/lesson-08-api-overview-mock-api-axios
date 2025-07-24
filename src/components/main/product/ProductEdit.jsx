import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_PREFIX } from "../../../constants/AppConstant";

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    imgUrl: "",
    type: "women",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API_PREFIX}/products/${id}`);
        setFormData(res.data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_PREFIX}/products/${id}`, formData);
      alert("Product updated successfully!");
      navigate("/product");
    } catch (err) {
      console.error("Failed to update product:", err);
      alert("Error updating product.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Product</h2>
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
          Edit
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
