import React, { useState } from "react";
import prado from '../../../../img/prado.png'
import logo from '../../../../img/logo.png'
import Header from "../../../../Components/Header/Header";
import mercedes from '../../../../img/mercedes.jpeg'
import { Link } from "react-router-dom";
import StarRating from "../../../../Components/StartRating/StarRating";
import Slidebar from "../../../../Components/Slidebar/Slidebar";
import Products from "../../../../Components/Product/Product/Products"
const CatalogSearch = ({onSearch, searchResults }) => {
    console.log(searchResults)
    return (
        <>
            <Header imageLogo={logo} title="Каталог" imageCar={prado}></Header>

            <Slidebar onSearch={onSearch}></Slidebar>
            {searchResults == null ? 
            <>
                <Products/>
            </>
            :
            <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {/* Рендеринг продуктов */}
                        {Array.isArray(searchResults) && searchResults.map(productItem => (
                            <div className="col mb-5" key={productItem.id}>
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                <img className="card-img-top" src={mercedes} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">{productItem.name}</h5>
                                        <StarRating rate={productItem.rate}/>
                                        <span className="text-muted text-decoration-line-through me-1">$155,000 </span>
                                        {productItem.price}
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <Link className="btn btn-outline-dark mt-auto" to={`/catalog/${productItem.id}`}>Подробнее</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
            </>
        
        }
        </>
    );
}

export default CatalogSearch;
