import React, { useState } from "react";
import axios from "axios";
import camera from "../assets/images/svg/camera-solid.svg";
import { useNavigate } from "react-router-dom";
const CreateProduct = () => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    details: "",
    price: "",
  });
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const addImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setPreview(e.target.result);
      };
    }
  };

  const createProduct = async (e) => {
    e.preventDefault();

    const body = new FormData();

    body.append("name", newProduct.name);
    body.append("details", newProduct.details);
    body.append("price", newProduct.price);
    body.append("productImage", image);

    try {
      await axios
        .post("http://localhost:5000/api/products", body)
        .then((res) => {
          setNewProduct({
            name: "",
            details: "",
            price: "",
          });
          setImage();
          navigate("/all-products");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="createProduct">
      <div className="container">
        <div className="row">
          <form>
            <input
              className="inp"
              type="text"
              name="name"
              placeholder="Product name"
              onChange={handleChange}
            />
            <input
              className="inp"
              type="number"
              name="price"
              placeholder="Product price"
              onChange={handleChange}
            />
            <input
              className="inp"
              type="text"
              name="details"
              placeholder="Product about info"
              onChange={handleChange}
            />
            <div className="image">
              {preview ? (
                <div className="preview">
                  <img className="imgPreview" src={preview} alt="preview" />
                </div>
              ) : (
                <label htmlFor="image">
                  <img src={camera} alt="Camera" />
                  Choose photo
                  <input
                    type="file"
                    className="default"
                    id="image"
                    name="productImage"
                    placeholder="Product image"
                    onChange={addImage}
                  />
                </label>
              )}
            </div>
            <button className="btn" type="submit" onClick={createProduct}>
              ADD TO PRODUCT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateProduct;
