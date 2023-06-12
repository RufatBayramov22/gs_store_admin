import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import camera from "../assets/images/svg/camera-solid.svg";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    details: "",
    price: "",
    productImage: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
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

  const editData = async (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append("name", data.name);
    body.append("details", data.details);
    body.append("price", data.price);
    body.append("productImage", image);

    try {
      await axios
        .put(`http://localhost:5000/api/products/${id}`, body)
        .then((res) => {
          navigate("/all-products");
        });
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };
  return (
    <section className="editProduct">
      <div className="container">
        <div className="row">
          <form>
            <input
              className="default"
              type="text"
              name="name"
              placeholder="Product name"
              value={data?.name}
              onChange={handleChange}
            />
            <input
              className="default"
              type="number"
              name="price"
              placeholder="Product price"
              value={data?.price}
              onChange={handleChange}
            />
            <input
              className="default"
              type="text"
              name="details"
              placeholder="Product about info"
              value={data?.details}
              onChange={handleChange}
            />
            <div className="image">
              {preview ? (
                <div className="preview">
                  <img className="imgPre" src={preview} alt="preview" />
                </div>
              ) : (
                <label htmlFor="image">
                  <img src={camera} alt="camera" />
                  Choose image
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

            <div className="editPreview">
              <img
                className="editImg"
                src={`http://localhost:5000/${data?.productImage}`}
                alt="preview"
              />
            </div>
            <button className="btn" type="submit" onClick={editData}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditProduct;
