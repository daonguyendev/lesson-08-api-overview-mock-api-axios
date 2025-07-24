import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_PREFIX } from "../../../constants/AppConstant";

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_PREFIX}/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="main-content">
      <h2 style={{ textAlign: "left" }}>Product View</h2>
      <div style={{ textAlign: "left" }}>
        <p>
          <strong>ID:</strong> {product.id}
        </p>
        <p>
          <strong>Name:</strong> {product.name}
        </p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Quantity:</strong> {product.quantity}
        </p>
        <p>
          <strong>Type:</strong> {product.type}
        </p>
        <p>
          <strong>Image:</strong>
          <br />
          <img src={product.imgUrl} alt={product.name} width="120" />
        </p>
      </div>
    </div>
  );

};

export default ProductView;
