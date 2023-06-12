import React, { useEffect, useState } from "react";
import axios from "axios";
import trash from "../assets/images/svg/trash-solid.svg";
import edit from "../assets/images/svg/pen-to-square-regular.svg";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const removeProduct = async (productID) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productID}`);
      const updatedProducts = products.filter(
        (product) => product.id !== productID
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    await axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="allProducts">
      <div className="container">
        <h2>All Product</h2>

        <table>
          <thead>
            <tr>
              <th>Products image</th>
              <th>Product name</th>
              <th>Product about</th>
              <th>Product price</th>
              <th>Choice</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={`http://localhost:5000/${product.productImage}`}
                    alt={product.name}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.details}</td>
                <td>${product.price}</td>
                <td>
                  <Link to={`/edit-product/${product.id}`}>
                    <img className="editImg" src={edit} alt="edit" />
                  </Link>

                  <img
                    className="trashImg"
                    src={trash}
                    alt="trash"
                    onClick={() => removeProduct(product.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllProducts;
