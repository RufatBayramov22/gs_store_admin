import { createContext, useState, useEffect} from "react";
import axios from "axios";

export const MainContext = createContext();

export const MyContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    getData();
  }, []);



  // useEffect(()=>{
  //   const localData = JSON.parse(localStorage.getItem("cart"));
  //   if(localData !==null){
  //     setCart(localData);
  //   }
  // },[]);

  // useEffect(()=>{
  //   localStorage.setItem("cart", JSON.stringify(cart))
  // },[cart]);

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



  // const removeProduct = (productID) => {
  //   const deletedItem = cart.filter((item) => item.id !== productID);
  //   setCart(deletedItem);
  // };

  const globalStates = {
    //
    products,
    setProducts,
    // cart,
    // setCart,
    //
    getData,
  };

  return (
    <MainContext.Provider value={globalStates}>{children}</MainContext.Provider>
  );
};
