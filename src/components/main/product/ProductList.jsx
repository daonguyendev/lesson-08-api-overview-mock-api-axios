"use client";

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_PREFIX } from "../../../constants/AppConstant";

const ProductList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFilterKey = (path) => {
    if (path.includes("/women")) return "women";
    if (path.includes("/men")) return "men";
    return "all";
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_PREFIX}/products`);
        const data = response.data;

        const filterKey = getFilterKey(location.pathname);
        const filtered = data.filter((product) => {
          if (filterKey === "all") return true;
          return product.type === filterKey || product.type === "all";
        });

        setProducts(filtered);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.pathname]);

  if (loading) return <p>Loading...</p>;

  const handleRemoveProduct = async (productId, productName) => {
    const confirmed = window.confirm(
      `Are you sure you want to remove "${productName}"?`
    );
    if (!confirmed) return;

    try {
      await axios.delete(`${API_PREFIX}/products/${productId}`);
      alert("Product removed successfully!");
      setProducts((prev) => prev.filter((p) => p.id !== productId));
    } catch (err) {
      console.error("Failed to remove product:", err);
      alert("Failed to remove product.");
    }
  };

  return (
    <div className="main-content">
      <h2>Product List</h2>

      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Type</th>
              <th>
                <a
                  href="#"
                  className="btn btn-add"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/product/add");
                  }}
                >
                  Add
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img src={product.imgUrl} alt={product.name} width="60" />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.type}</td>
                <td>
                  <a
                    href="#"
                    className="btn btn-view"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/product/view/${product.id}`);
                    }}
                  >
                    View
                  </a>
                  <a
                    href="#"
                    className="btn btn-edit"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/product/edit/${product.id}`);
                    }}
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="btn btn-remove"
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveProduct(product.id, product.name);
                    }}
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
