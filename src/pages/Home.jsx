import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
       
        <h2>GALTASARAY</h2>
        <button className="btn">
          <Link to="/all-products">All Product page go</Link>
        </button>
      </div>
    </section>
  );
};

export default Home;
