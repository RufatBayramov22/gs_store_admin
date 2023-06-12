import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className='notFound'>
    <div className="row">
        <div className="info">
            <h2>404 ERROR</h2>
            <p>Üzgünüz, bu sayfa artık 
            geçerli değil veya mevcut değil!
            </p>
            <Link to="/">Anasayfaya Don</Link>
        </div>
    </div>
    </section>
  );
};

export default NotFound;
